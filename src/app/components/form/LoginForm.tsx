"use client";
import { FC, useState } from "react";
import { Button, Grid, Link, TextField, Typography, FormHelperText } from "@mui/material";
import NextLink from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginForm: FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role] = useState(1);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let valid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Email inválido");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("La contraseña no puede estar vacía");
      valid = false;
    }

    if (!valid) return;

    try {
      const data = await login(email, password, role);
      console.log("Login successful:", data);
      storeToken(data.accessToken);
      router.push("/dashboard/list");
    } catch (err) {
      console.error("Login failed:", err);
      // Handle login error
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
          error={!!emailError}
          helperText={emailError}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contraseña"
          type="password"
          variant="filled"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
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
    </Grid>
  );
};

export default LoginForm;
