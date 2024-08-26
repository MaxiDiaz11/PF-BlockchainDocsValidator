"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BarChartComponent from "../ui/BarChartComponent";
import { useStatistics } from "@/app/hooks/useStatistics";
import AverageReviewTimeComponent from "../ui/AverageReviewTimeComponent";
import HighestDemandComponent from "../ui/HighestDemandComponent";

export const StatisticsForm = () => {
  const [documentsByMonth, setDocumentsByMonth] = useState([]);
  const [averageReviewTime, setAverageReviewTime] = useState(0);
  const [highestDemand, setHighestDemand] = useState({
    month: "",
    total_count: 0,
  });

  const { getStatisticsData } = useStatistics();

  useEffect(() => {
    getStatisticsData().then((response) => {
      setDocumentsByMonth(response.documentsByMonth);
      setAverageReviewTime(response.averageReviewTime);
      setHighestDemand(response.highestDemand);
    });
  }, []);

  return (
    <Box sx={{ padding: "10px", textAlign: "center" }}>
      <Typography variant="h6" mb={2}>
        Estadisticas
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <BarChartComponent documentsByMonth={documentsByMonth} />
          <AverageReviewTimeComponent averageReviewTime={averageReviewTime} />
          <HighestDemandComponent highestDemand={highestDemand} />
        </Grid>
      </Grid>
    </Box>
  );
};
