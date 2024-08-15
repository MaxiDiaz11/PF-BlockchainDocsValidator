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

export const GenerateForm = () => {
  const { toggleModal } = useContext(UiContext);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
              value={age}
              label="Documento"
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={10}>Estado academico</MenuItem>
              <MenuItem value={20}>Certificado de alumno regular</MenuItem>
              <MenuItem value={30}>Otro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Legajo"
            type="number"
            variant="filled"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            type="password"
            variant="filled"
            fullWidth
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
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
