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
          Estadisticas
      </Typography>
      <Grid container spacing={2}>
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
