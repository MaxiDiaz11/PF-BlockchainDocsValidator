import React from "react";
import { Metadata } from "next";
import { DocsLayout, PageLayout } from "@/app/components/layouts";
import { Box, Grid, Typography } from "@mui/material";
import { StatisticsForm } from "@/app/components/form";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";

export const metadata: Metadata = {
  title: "BS | Estadísticas",
  description: "Estadísticas de documentos",
};

const StatisticsPage = () => {
  return (
    <DocsLayout
      title="Estadísticas"
      pageDescription="Estadísticas de documentos"
    >
      <PageLayout title="Estadísticas">
        <Grid item xs={12} md={7} mt={4}>
          <StatisticsForm />
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
              En esta sección podrás generar las estadísticas de los documentos
            </Typography>
            <AssessmentRoundedIcon sx={{ fontSize: 150, color: "dark" }} />
          </Box>
        </Grid>
      </PageLayout>
    </DocsLayout>
  );
};

export default StatisticsPage;
