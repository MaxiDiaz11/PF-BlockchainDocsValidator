"use client";
import { FC, useState } from "react";
import { Button, Grid, Box, TextField, Typography, FormHelperText } from "@mui/material";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginForm: FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role] = useState(1);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, background: '#333', padding: 2, borderRadius: 4 }}>
      <Image
        src={"/img/BlockSolutions.png"}
        alt="BlockSolutions"
        sizes="100vw"
        width={400}
        height={400}
        priority
        style={{
          borderRadius: "50%",
          maxWidth: "100%",
          height: "auto",
          boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.3)",
        }}
      />
      <Grid item xs={12}>
        <Typography variant="h1" component={"h1"} textAlign={"center"} color={"#fff"}>
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
          sx={{ color: "#fff", background: "#fff" }}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
        ></TextField>
        <Typography sx={{ paddingTop: 1, color: 'red'}}>
          {emailError ? emailError : ''}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contraseña"
          type="password"
          variant="filled"
          fullWidth
          value={password}
          sx={{ color: "#fff", background: "#fff" }}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
        ></TextField>
        <Typography sx={{ paddingTop: 1, color: 'red'}}>
          {passwordError ? passwordError : ''}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="secondary"
          size="large"
          fullWidth
          type="submit"
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </Grid>
    </Box>
  );
};

export default LoginForm;