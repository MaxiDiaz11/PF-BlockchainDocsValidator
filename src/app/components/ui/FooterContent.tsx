"use client";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LanguageIcon from '@mui/icons-material/Language';

export const FooterContent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(3),
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 2,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <Box
            component="img"
            src="/img/logoUTN.png"
            alt="Logo"
            sx={{ width: 300, height: "auto" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          gap={1}
          flexDirection="column"
          alignItems="left"
        >
          <Typography variant="h6" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body2" sx={{display:"flex",gap:1, alignItems:"center"}}>
          <FmdGoodIcon/><b>Dirección:</b> Bernardino Rivadavia 1050, T4001 San Miguel de
            Tucumán, Tucumán 
          </Typography>
          <Typography variant="body2" sx={{display:"flex",gap:1, alignItems:"center"}}>
          <CallIcon/><b>Teléfono: </b> 0381 421-7150 
          </Typography>
          <Link href="https://www.frt.utn.edu.ar/" target="_blank">
              <Typography variant="body2" sx={{display:"flex",gap:1, alignItems:"center"}}>
                <LanguageIcon/><b>UTN-FRT</b>
              </Typography>
          </Link>
        </Grid>

        {!isSmallScreen && (
          <Grid item xs={12} sm={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.718203213633!2d-65.20110822456381!3d-26.817099976704288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c23b7b6e863%3A0x976c9adc5013942c!2sUniversidad%20Tecnológica%20Nacional%20-%20Facultad%20Regional%20Tucumán!5e0!3m2!1ses-419!2sar!4v1723649584562!5m2!1ses-419!2sar"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Location Map"
            ></iframe>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};