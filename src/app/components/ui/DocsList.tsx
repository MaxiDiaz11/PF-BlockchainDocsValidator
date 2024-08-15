"use client";
import React from "react";
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

export const DocsList = () => {
  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

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
        <ListItemText primary="Constancia de Alumno Regular" />
        <ListItemText
          primary="14-06-24"
          sx={{
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
          itemSize={70}
          itemCount={200}
          overscanCount={10}
        >
          {renderRow}
        </FixedSizeList>
      </Grid>
    </>
  );
};
