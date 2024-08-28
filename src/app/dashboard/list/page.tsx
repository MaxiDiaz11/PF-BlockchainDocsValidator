import { DocsLayout, PageLayout } from "@/app/components/layouts";
import { Box, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import { DocsList } from "@/app/components/ui";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";

export const metadata: Metadata = {
  title: "BS | Listar documentos",
  description: "Listar documentos",
};

const ListDocsPage = () => {
  return (
    <DocsLayout title="Listar documentos" pageDescription="Listar documentos">
      <PageLayout title="Listado de documentos">
        <Grid item xs={12} md={9} mt={4}>
          <DocsList />
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
              En esta sección podrás encontrar tus documentos.
            </Typography>
            <FolderCopyRoundedIcon sx={{ fontSize: 150, color: "dark" }} />
          </Box>
        </Grid>
      </PageLayout>
    </DocsLayout>
  );
};

export default ListDocsPage;
