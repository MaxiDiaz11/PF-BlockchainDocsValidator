import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AproveTable from "../ui/AproveTable";

export const AproveDocAdmin = () => {
  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Aprobar documento
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AproveTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
