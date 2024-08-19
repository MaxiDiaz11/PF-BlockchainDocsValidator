import React, { useState } from "react";
import NextLink from "next/link";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "@/app/components/layouts";
import { Metadata } from "next";
import { useAuth } from "@/app/hooks/useAuth";

export const metadata: Metadata = {
  title: "BS | Ingresar",
  description: "Login page",
};

const LoginPage = () => {
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [role] = useState(1); 

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      const data = await login(email, password, role); 
      console.log("Login successful:", data); 
      
    } catch (err) {
      console.error("Login failed:", err);
    }
  };


  return (
    <AuthLayout title={"Ingresar"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component={"h1"} textAlign={"center"}>
              Iniciar sesión
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Legajo"
              type="text"
              variant="filled"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
              type="submit"
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <NextLink href={"/auth/register"} legacyBehavior passHref>
              <Link underline="always">¿No tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
