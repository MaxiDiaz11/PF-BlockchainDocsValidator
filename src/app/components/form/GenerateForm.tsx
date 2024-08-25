"use client";
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { UiContext } from "@/app/context";
import { useDocs } from "@/app/hooks/useDocs";

export const GenerateForm = () => {
  const { toggleModal } = useContext(UiContext);
  const [document, setDocument] = useState("");
  const [legajo, setLegajo] = useState("");
  const [sysacadPass, setSysacadPass] = useState("");
  const { solicitarDoc } = useDocs();

  const handleChange = (event: SelectChangeEvent) => {
    setDocument(event.target.value);
  };


  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      const data = await solicitarDoc(document,legajo,sysacadPass).then(
        data => openLinkInNewTab(data.url)
      )
      console.log(data)
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const openLinkInNewTab= (url : string) => {
    window.open(url, "_blank");
  }

  return (
    <Box sx={{ padding: "10px", textAlign: "center" }}>
      <Typography variant="h6" mb={2}>
        Elegir la documentación a generar
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Documento
            </InputLabel>
            <Select
              variant="standard"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={document}
              label="Documento"
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={"ConstanciaAlumnoRegular"}>Certificado de alumno regular</MenuItem>
              <MenuItem value={"CertificadoAnalitico"}>Certificado Analitico</MenuItem>
              <MenuItem value={""}>Otro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Legajo"
            type="number"
            variant="filled"
            fullWidth
            value={legajo}
            onChange={(e) => setLegajo(e.target.value)}

          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            type="password"
            variant="filled"
            fullWidth
            value={sysacadPass}
            onChange={(e) => setSysacadPass(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Generar documento
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            variant="outlined"
            fullWidth
            onClick={() => toggleModal("requestDoc")}
          >
            Solicitar documento especial
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
