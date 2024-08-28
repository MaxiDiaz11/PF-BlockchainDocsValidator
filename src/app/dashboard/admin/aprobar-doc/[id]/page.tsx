import React from "react";
import { Metadata } from "next";
import { DocsLayout, PageLayout } from "@/app/components/layouts";
import { Box, Grid, Typography } from "@mui/material";
import { AproveDocAdmin } from "@/app/components/form";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";


export const metadata: Metadata = {
  title: "BS | Aprobar documentos",
  description: "Aprobación de documentos",
};
const AproveDocPage = () => {

  

  return (
    <DocsLayout
      title="Aprobar documentación"
      pageDescription="Página de aprobación de documentación"
    >
      <PageLayout title="Aprobar documentación">
        <Grid item xs={12} md={9} mt={4}>
          <AproveDocAdmin />
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
              En esta sección podrás aprobar los documentos especiales que se
              solicitaron
            </Typography>
            <AssignmentTurnedInRoundedIcon
              sx={{ fontSize: 150, color: "dark" }}
            />
          </Box>
        </Grid>
      </PageLayout>
    </DocsLayout>
  );
};
export default AproveDocPage;
