import { DocsLayout } from "@/app/components/layouts";
import { Grid, Divider, Box, Typography } from "@mui/material";
import { Metadata } from "next";
import { GenerateForm } from "@/app/components/form";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";

export const metadata: Metadata = {
  title: "BS | Generar documentos",
  description: "Generar documentos",
};

const GenDocsPage = () => {
  return (
    <DocsLayout title="Generar documentos" pageDescription="Generar documentos">
      <Grid item className="text-black mt-2" sx={{ textAlign: "center" }}>
        <h1 className="mt-2 text-3xl">Generación de documentos</h1>
        <Divider />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={7} mt={4}>
          <GenerateForm />
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          mt={4}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              padding: "10px",
              textAlign: "center",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography variant="h6" mb={2}>
              Información
            </Typography>
            <Typography variant="body1" mb={2}>
              En esta sección podrás generar y descargar tus documentos de tu
              interés.
            </Typography>
            <UploadFileRoundedIcon sx={{ fontSize: 150, color: "dark" }} />
          </Box>
        </Grid>
      </Grid>
    </DocsLayout>
  );
};

export default GenDocsPage;
