"use client";
import UiProvider from "@/app/context/ui/UiProvider";
import { lightTheme } from "@/app/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import React from "react";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ConfigLayout = ({ children }: Props) => {
  return (
    <html lang="es">
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <UiProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </UiProvider>
      </SWRConfig>
    </html>
  );
};

export default ConfigLayout;
