import React from "react";
import { Metadata } from "next";
import { SearchDocAdmin } from "@/app/components/form";
import { DocsLayout, PageLayout } from "@/app/components/layouts";
import { Box, Grid, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const metadata: Metadata = {
  title: "BS | Buscar documentos",
  description: "Busqueda de documentos",
};

const SearchDocPage = () => {
  return (
    <DocsLayout
      title="Buscar documentos"
      pageDescription="Busqueda de documentos"
    >
      <PageLayout title="Buscar documentos">
        <Grid item xs={12} md={7} mt={4}>
          <SearchDocAdmin />
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
              En esta sección podrás buscar los documentos que desees, ya sea
              por: nombre, legajo o estado.
            </Typography>
            <SearchRoundedIcon sx={{ fontSize: 150, color: "dark" }} />
          </Box>
        </Grid>
      </PageLayout>
    </DocsLayout>
  );
};

export default SearchDocPage;
