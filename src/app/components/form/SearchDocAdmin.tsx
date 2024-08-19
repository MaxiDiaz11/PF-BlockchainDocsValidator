import React from "react";
import {
  Alert,
  Box,
  Button,
  Fab,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";

export const SearchDocAdmin = () => {
  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Buscar documento
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre | Legajo | Estado"
              type="text"
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
              Buscar documento
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* TODO: SI se encuentra documento mostrar lo de abajo */}
      <Grid item xs={12} sx={{ marginTop: 4 }}>
        {/* TODO: if hay documento mostrar lo de abajo, sino mensaje de error */}
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Documento a descargar:
        </Typography>
        <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography variant="body1" sx={{ marginTop: 3 }}>
            Certificado de ALUMNO REGULAR{" "}
          </Typography>
          <Fab className="circular-btn">
            <DownloadForOfflineRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Grid>

        <Alert variant="outlined" severity="error" sx={{ marginTop: 2 }}>
          No encontramos el documento solicitado
        </Alert>
      </Grid>
    </>
  );
};
