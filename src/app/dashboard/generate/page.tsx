import { DocsLayout, PageLayout } from "@/app/components/layouts";
import { Grid, Box, Typography } from "@mui/material";
import { Metadata } from "next";
import { GenerateForm } from "@/app/components/form";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import CheckRoute from "@/app/components/ui/CheckRoute";


export const metadata: Metadata = {
  title: "BS | Generar documentos",
  description: "Generar documentos",
};

const GenDocsPage = () => {
  return (
    <DocsLayout title="Generar documentos" pageDescription="Generar documentos">
      <PageLayout title="Generación de documentos">
        <Grid item xs={12} md={9} mt={4}>
          <GenerateForm />
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
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
        <CheckRoute/>
      </PageLayout>
    </DocsLayout>
  );
};

export default GenDocsPage;
