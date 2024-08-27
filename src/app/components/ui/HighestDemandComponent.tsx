"use client";
import { Grid, Typography } from "@mui/material";
import * as React from "react";

const monthNames: { [key: string]: string } = {
  "01": "Enero",
  "02": "Febrero",
  "03": "Marzo",
  "04": "Abril",
  "05": "Mayo",
  "06": "Junio",
  "07": "Julio",
  "08": "Agosto",
  "09": "Septiembre",
  "10": "Octubre",
  "11": "Noviembre",
  "12": "Diciembre",
};

interface HighestDemandProps {
  highestDemand: {
    month: string;
    total_count: number;
  };
}

const HighestDemandComponent: React.FC<HighestDemandProps> = ({
  highestDemand,
}) => {
  const [year, monthNumber] = highestDemand.month.split("-");

  const monthName = monthNames[monthNumber];

  return (
    <>
      <Grid item sx={{ marginTop: 1 }}>
        <Typography variant="h6">
          Mes de mayor Demanda:{" "}
          <b>
            {monthName} {year}
          </b>
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: 1 }}>
        <Typography variant="h6">
          Total de documentos en la Blockchain:{" "}
          <b>{highestDemand.total_count}</b>
        </Typography>
      </Grid>
    </>
  );
};

export default HighestDemandComponent;
