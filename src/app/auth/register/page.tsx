import React from "react";
import NextLink from "next/link";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "@/app/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse",
  description: "Register page",
};

const RegisterPage = () => {
  return (
    <AuthLayout title={"Registrarse"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component={"h1"} textAlign={"center"}>
              Crear cuenta
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nombre completo"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
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
            >
              Crear cuenta
            </Button>
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <NextLink href={"/auth/login"} legacyBehavior passHref>
              <Link underline="always">¿Ya tienes una cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
