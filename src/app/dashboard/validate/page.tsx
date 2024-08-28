import { SearchDocsForm } from "@/app/components/form";
import { DocsLayout, PageLayout } from "@/app/components/layouts";
import { Box, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import PlagiarismRoundedIcon from "@mui/icons-material/PlagiarismRounded";

export const metadata: Metadata = {
  title: "BS | Validar documentos",
  description: "Validar documentos",
};

const ValidateDocsPage = () => {
  return (
    <DocsLayout title="Validar documentos" pageDescription="Validar documentos">
      <PageLayout title="Validación de documentos">
        <Grid item xs={12} md={9} mt={4}>
          <SearchDocsForm />
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
              En esta sección podrás validar y descargar tus documentos de tu
              interés.
            </Typography>
            <PlagiarismRoundedIcon sx={{ fontSize: 150, color: "dark" }} />
          </Box>
        </Grid>
      </PageLayout>
    </DocsLayout>
  );
};

export default ValidateDocsPage;
