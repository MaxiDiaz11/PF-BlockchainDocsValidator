"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useSpecialDocs } from "@/app/hooks/useSpecialDocs";
import {
  ListItem,
  ListItemText,
} from "../../../../node_modules/@mui/material/index";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { useRouter } from "../../../../node_modules/next/navigation";
import { getDate, getNombreDoc } from "../../util/utils";

export const SearchDocAdmin = () => {
  const [legajo, setLegajo] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const { filterSpecialDoc } = useSpecialDocs();
  const [specialDocuments, setSpecialDocuments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    try {
      filterSpecialDoc(status, name, legajo).then((data) => {
        setSpecialDocuments(data);
      });
    } catch (error) {
      console.error("Error getting files", error);
    }
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(Number(event.target.value));
  };

  const searchDocs = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await filterSpecialDoc(status, name, legajo);
    } catch (error) {
      console.error("Error getting files", error);
    }
  };

  const goToEvaluarDocument = (hash: string) => {
    router.push(`/dashboard/admin/aprobar-doc/${hash}`);
  };

  const renderSpecialDocumentRow = (props: ListChildComponentProps) => {
    const { index, style } = props;
    const document: any = specialDocuments[index];

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
          <Button
            color="secondary"
            className="circular-btn"
            onClick={() => goToEvaluarDocument(document.id)}
          >
            Evaluar
          </Button>
        }
      >
        <ListItemText primary={getNombreDoc(document.name)} />
        <ListItemText
          primary={getDate(document.uploadDate)}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        />
      </ListItem>
    );
  };

  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Buscar documento
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Legajo"
              type="text"
              variant="filled"
              fullWidth
              onChange={(evt) => setLegajo(evt.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Nombre"
              type="text"
              variant="filled"
              fullWidth
              onChange={(evt) => setName(evt.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Select
              variant="filled"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Documento"
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={0}>Pendiente</MenuItem>
              <MenuItem value={1}>Aprobado</MenuItem>
              <MenuItem value={2}>Rechazado</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            onClick={(e) => searchDocs(e)}
          >
            Buscar documento
          </Button>
        </Grid>
      </Box>
      <Grid item xs={12}>
        <FixedSizeList
          height={200}
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
