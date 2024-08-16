"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import BarChartComponent from "../ui/BarChartComponent";

export const StatisticsForm = () => {
  const [age, setAge] = useState("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ padding: "10px", textAlign: "center" }}>
      <Typography variant="h6" mb={2}>
        Elegir la estadística a generar
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Estadística a generar
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
              <MenuItem value={10}>Número de documentos por mes</MenuItem>
              <MenuItem value={20}>Mes con más demanda de solicitudes</MenuItem>
              <MenuItem value={30}>
                Tiempo promedio de revisión de solicitudes
              </MenuItem>
              <MenuItem value={30}>Total de documentos</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", marginY: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <DatePicker
                  label="Desde"
                  value={selectedDate}
                  onChange={(newDate) => {
                    setSelectedDate(newDate);
                  }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <DatePicker
                  label="Hasta"
                  value={selectedDate}
                  onChange={(newDate) => {
                    setSelectedDate(newDate);
                  }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
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

        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <BarChartComponent />
        </Grid>
      </Grid>
    </Box>
  );
};
