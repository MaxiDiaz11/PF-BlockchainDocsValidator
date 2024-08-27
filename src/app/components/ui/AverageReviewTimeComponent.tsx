"use client";
import { Typography } from "@mui/material";
import * as React from "react";

interface AverageReviewTimeProps {
  averageReviewTime: number;
}

const AverageReviewTimeComponent: React.FC<AverageReviewTimeProps> = ({
  averageReviewTime,
}) => {
  return (
    <div>
      <Typography variant="h6">
        Tiempo Promedio de Revision de Documentos:{" "}
        <b>{averageReviewTime.toFixed(1)} días</b>
      </Typography>
    </div>
  );
};

export default AverageReviewTimeComponent;
