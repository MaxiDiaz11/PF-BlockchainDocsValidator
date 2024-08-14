import { Box, Button, Grid, TextField, Typography, Chip } from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";

export const SearchDocsForm = () => {
  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Encuentra tu certificado universitario
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Código de validación"
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

      <Grid item xs={12} sx={{ marginTop: 4 }}>
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Tipo de certificado:
        </Typography>

        <Typography variant="body1" sx={{ marginTop: 3 }}>
          Estado: <Chip label="Documento válido" color="success" />
        </Typography>

        <Grid
          item
          xs={12}
          sx={{
            border: "1px solid",
            paddingX: 2,
            paddingY: 1,
            marginTop: 3,
            borderRadius: 10,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ marginTop: 2, fontWeight: "bold" }}>
            Certificado de alumno regular
          </Typography>
          <Button className="circular-btn">
            <DownloadForOfflineRoundedIcon sx={{ fontSize: 30 }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
