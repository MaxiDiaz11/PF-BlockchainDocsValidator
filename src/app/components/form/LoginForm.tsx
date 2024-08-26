"use client";
import { FC, useState } from "react";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginForm: FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState(1);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await login(email, password, role);
      console.log("Login successful:", data);
      storeToken(data.accessToken);
      router.push("/dashboard/list");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const storeToken = (token: string) => {
    sessionStorage.setItem("authToken", token);
    console.log("Token Stored");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" component={"h1"} textAlign={"center"}>
          Iniciar sesión
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
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
          onClick={handleSubmit}
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
  );
};

export default LoginForm;
