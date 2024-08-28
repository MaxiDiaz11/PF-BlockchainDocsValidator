import React  from "react";
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
        <LoginForm/>
    </AuthLayout>
  );
};

export default LoginPage;