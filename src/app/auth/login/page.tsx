import React  from "react";
import { Box} from "@mui/material";
import { AuthLayout } from "@/app/components/layouts";
import { Metadata } from "next";
import LoginForm from "@/app/components/form/LoginForm";

export const metadata: Metadata = {
  title: "BS | Ingresar",
  description: "Login page",
};

const LoginPage = () => {




  return (
    <AuthLayout title={"Ingresar"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <LoginForm/>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
