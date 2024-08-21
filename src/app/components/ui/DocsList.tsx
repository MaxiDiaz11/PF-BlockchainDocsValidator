"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { useDocs } from "@/app/hooks/useDocs";

export const DocsList = () => {
  const { getDocs } = useDocs();
  const [documents, setDocuments] = useState([])
  const [specialDocuments, setSpecialDocuments] = useState([])

  useEffect(() => {
    getDocs().then( data => {
      setDocuments(data.documents)
      setSpecialDocuments(data.specialDocuments)
    });
  }, []);

  const renderDocumentRow = (props: ListChildComponentProps) => {
    const { index, style } = props;
    const document : any = documents[index];
    return (
      <ListItem
        key={index}
        component="div"
        style={style}
        secondaryAction={
          <IconButton>
            <DownloadForOfflineRoundedIcon
              sx={{ color: "black", fontSize: 30 }}
            />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <FolderIcon sx={{ color: "black" }} />
        </ListItemAvatar>
        <ListItemText primary={document.name} />
        <ListItemText
          primary={document.uploadDate}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        />
      </ListItem>
    );
  };

  const renderSpecialDocumentRow = (props: ListChildComponentProps) => {
    const { index, style } = props;
    const document : any = specialDocuments[index];

    let backgroundColor;
    switch (document.status) {
      case "Pendiente":
        backgroundColor = "yellow";
        break;
      case "Aprobado":
        backgroundColor = "green";
        break;
      case "Rechazado":
        backgroundColor = "red";
        break;
      default:
        backgroundColor = "yellow";
    }


    return (
      <ListItem
        key={index}
        component="div"
        style={style}
        secondaryAction={
          <IconButton>
            <DownloadForOfflineRoundedIcon
              sx={{ color: "black", fontSize: 30 }}
            />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <FolderIcon sx={{ color: "black" }} />
        </ListItemAvatar>
        <ListItemText primary={document.name} />
        <ListItemText
          primary={document.uploadDate}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        />
        <ListItemText
        primary={document.status}
        sx={{
          backgroundColor: backgroundColor,
          color: "black", // Font color
          fontWeight: "bold",
          padding: "4px 8px",
          borderRadius: "4px",
          display: { xs: "none", sm: "block" },
        }}
      />
      </ListItem>
    );
  };

  return (
    <>
      <Grid item xs={12} marginBottom={2}>
        <Typography variant="h6" mb={2} textAlign={"center"}>
          Buscar documento
        </Typography>
        <TextField fullWidth label="Documento" id="documento" />
      </Grid>
      <Grid item xs={12}>
      <FixedSizeList
          height={500}
          width="100%"
          itemSize={50}
          itemCount={documents?.length}
          overscanCount={10}
        >
          {renderDocumentRow}
        </FixedSizeList>

      <FixedSizeList
          height={500}
          width="100%"
          itemSize={50}
          itemCount={specialDocuments?.length}
          overscanCount={10}
        >
          {renderSpecialDocumentRow}
        </FixedSizeList>
      </Grid>
    </>
  );
};
