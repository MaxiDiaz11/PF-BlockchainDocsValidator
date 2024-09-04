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
  FormHelperText,
} from "@mui/material";
import { UiContext } from "@/app/context";
import { useDocs } from "@/app/hooks/useDocs";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FilePresentIcon from '@mui/icons-material/FilePresent';

const validLegajos = [48393, 48453, 48409]

export const GenerateForm = () => {
  const { toggleModal } = useContext(UiContext);
  const [document, setDocument] = useState("");
  const [legajo, setLegajo] = useState("");
  const [sysacadPass, setSysacadPass] = useState("");

  const [documentError, setDocumentError] = useState(false);
  const [legajoError, setLegajoError] = useState(false);
  const [sysacadPassError, setSysacadPassError] = useState(false);

  const { solicitarDoc } = useDocs();

  const handleChange = (event: SelectChangeEvent) => {
    setDocument(event.target.value);
    setDocumentError(false);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setDocumentError(false);
    setLegajoError(false);
    setSysacadPassError(false);

    let valid = true;
    if (document === "") {
      setDocumentError(true);
      valid = false;
    }
    if (legajo === "" || !validLegajos.includes(Number(legajo))) {
      setLegajoError(true);
      valid = false;
    }
    if (sysacadPass === "") {
      setSysacadPassError(true);
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const data = await solicitarDoc(document, legajo, sysacadPass).then(
        (data) => openLinkInNewTab(data.url)
      );
      console.log(data);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Box sx={{ padding: "10px", textAlign: "center" }}>
      <Typography variant="h6" mb={2}>
        Elegir la documentación a generar
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "100%" }} error={documentError}>
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
              <MenuItem value={"ConstanciaAlumnoRegular"}>
                Certificado de alumno regular
              </MenuItem>
              <MenuItem value={"CertificadoAnalitico"}>
                Certificado Analitico
              </MenuItem>
            </Select>
            {documentError && (
              <FormHelperText>
                Por favor, seleccione un documento.
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Legajo"
            type="number"
            variant="filled"
            fullWidth
            value={legajo}
            onChange={(e) => {
              setLegajo(e.target.value);
              setLegajoError(false);
            }}
            error={legajoError}
            helperText={legajoError ? "Por favor, ingrese un legajo valido." : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            type="password"
            variant="filled"
            fullWidth
            value={sysacadPass}
            onChange={(e) => {
              setSysacadPass(e.target.value);
              setSysacadPassError(false);
            }}
            error={sysacadPassError}
            helperText={
              sysacadPassError ? "Por favor, ingrese su contraseña." : ""
            }
          />
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
            <DocumentScannerIcon sx={{marginRight:1}}/>
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
            <FilePresentIcon sx={{marginRight:1}}/>
            Solicitar documento especial
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
