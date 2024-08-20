"use client"
import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Fab,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import {useSpecialDocs} from "@/app/hooks/useSpecialDocs"

export const SearchDocAdmin = () => {

  const [legajo,setLegajo] = useState("")
  const [name,setName] = useState("")
  const [status, setStatus] = useState(0)
  const {filterSpecialDoc} = useSpecialDocs();

  useEffect(() => {
    try {
      const data = filterSpecialDoc(status,name,legajo)

    } catch (error) {
      console.error("Error getting files", error);
    }
  },[])

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(Number(event.target.value));
  };

  const searchDocs = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const data = await filterSpecialDoc(status,name,legajo)

    } catch (error) {
      console.error("Error getting files", error);
    }
  }

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
              onChange={evt => setLegajo(evt.target.value)}
            ></TextField>
            <TextField
              label="Nombre"
              type="text"
              variant="filled"
              fullWidth
              onChange={evt => setName(evt.target.value)}

            ></TextField>
            <Select
              variant="standard"
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

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
            >
              Buscar documento
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* TODO: SI se encuentra documento mostrar lo de abajo */}
      <Grid item xs={12} sx={{ marginTop: 4 }}>
        {/* TODO: if hay documento mostrar lo de abajo, sino mensaje de error */}
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Documento a descargar:
        </Typography>
        <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography variant="body1" sx={{ marginTop: 3 }}>
            Certificado de ALUMNO REGULAR{" "}
          </Typography>
          <Fab className="circular-btn">
            <DownloadForOfflineRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Grid>

        <Alert variant="outlined" severity="error" sx={{ marginTop: 2 }}>
          No encontramos el documento solicitado
        </Alert>
      </Grid>
    </>
  );
};
