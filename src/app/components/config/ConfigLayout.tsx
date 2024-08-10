"use client";
import UiProvider from "@/app/context/ui/UiProvider";
import { lightTheme } from "@/app/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ConfigLayout = ({ children }: Props) => {
  return (
    <html lang="es">
      <UiProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </UiProvider>
    </html>
  );
};

export default ConfigLayout;
