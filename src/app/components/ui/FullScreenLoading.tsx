import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoading = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="calc(100vh - 200px)"
      sx={{ flexDirection: "column" }}
    >
      <Typography variant="h1" component={"h1"} sx={{ mb: 3 }}>
        Cargando...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
