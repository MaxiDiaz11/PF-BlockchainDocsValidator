"use client";
import React, { useEffect, useState } from "react";
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
import BarChartComponent from "../ui/BarChartComponent";
import { useStatistics } from "@/app/hooks/useStatistics";
import AverageReviewTimeComponent from "../ui/AverageReviewTimeComponent";
import HighestDemandComponent from "../ui/HighestDemandComponent";
import TotalDocumentComponent from "../ui/TotalDocumentComponent";

export const StatisticsForm = () => {

  const [documentsByMonth,setDocumentsByMonth] = useState([]);
  const [averageReviewTime,setAverageReviewTime] = useState(0);
  const [totalDocument,setTotalDocument] = useState(0);
  const [highestDemand,setHighestDemand] = useState({
    month:'',
    total_count:0
  });
  
  const {getStatisticsData} = useStatistics()

  useEffect(()=> {
    getStatisticsData().then(response => {
      setDocumentsByMonth(response.documentsByMonth);
      setAverageReviewTime(response.averageReviewTime);
      setHighestDemand(response.highestDemand);
      setTotalDocument(response.totalDocument);
    })
  }, [])

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
              label="Documento"
              fullWidth
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
          <BarChartComponent documentsByMonth={documentsByMonth}/>
          <AverageReviewTimeComponent averageReviewTime={averageReviewTime}/>
          <HighestDemandComponent highestDemand={highestDemand}/>
          <TotalDocumentComponent totalDocument={totalDocument}/>
        </Grid>
      </Grid>
    </Box>
  );
};
