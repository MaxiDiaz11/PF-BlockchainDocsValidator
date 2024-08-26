"use client";
import { Grid } from "@mui/material";
import * as React from "react";

interface TotalDocumentProps {
  totalDocument: number;
}

const TotalDocumentComponent: React.FC<TotalDocumentProps> = ({
  totalDocument,
}) => {
  return (
    <Grid item>
      <h2>Total de Documentos en la Blockchain</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        {totalDocument} Documentos
      </p>
    </Grid>
  );
};

export default TotalDocumentComponent;
