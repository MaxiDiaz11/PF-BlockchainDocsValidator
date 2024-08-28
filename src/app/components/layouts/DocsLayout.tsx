import React, { FC } from "react";
import Head from "next/head";
import {
  ContentDocsLayout,
  Footer,
  ModalComponent,
  NavBar,
  SideMenu,
} from "../ui";
import { Box, Container } from "@mui/material";
import { Toaster } from "sonner";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const DocsLayout: FC<Props> = ({
  children,
  pageDescription,
  title,
  imageFullUrl,
}) => {
  //TODO: Implementar redirect a login en caso que no tenga sesion iniciada

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ocupa al menos el 100% de la altura de la ventana
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl}></meta>}
      </Head>
      <nav>
        <NavBar></NavBar>
      </nav>
      <Toaster  richColors  position="top-right"
        visibleToasts={1}
         toastOptions={{
                    style:{
                      fontSize:"1.2rem"
                    }
                   }}          />
      <SideMenu></SideMenu>
      <ModalComponent></ModalComponent>

      <ContentDocsLayout>
        <Container maxWidth="lg">{children}</Container>
      </ContentDocsLayout>

      <footer>
        <Footer></Footer>
      </footer>
    </Box>
  );
};
