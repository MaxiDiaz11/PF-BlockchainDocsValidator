"use client";
import React, { useContext, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { UiContext } from "@/app/context";

export const NavBar = () => {
  const page = usePathname()
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref legacyBehavior>
          <Link display={"flex"} alignItems={"center"}>
            <Typography variant="h6">BlockSolutions</Typography>
            {/* <Typography sx={{ ml: 0.5 }}>Solutions</Typography>  */}
          </Link>
        </NextLink>

        <Box flex={1}></Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href={"/category/men"} passHref legacyBehavior>
            <Link>
              <Button color={page === "/category/men" ? "primary" : "info"}>
                Generar
              </Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/women"} passHref legacyBehavior>
            <Link>
              <Button color={page === "/category/women" ? "primary" : "info"}>
                Validar
              </Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/kid"} passHref legacyBehavior>
            <Link>
              <Button color={page === "/category/kid" ? "primary" : "info"}>
                Listar
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1}></Box>

        <IconButton>
          <SearchOutlined></SearchOutlined>
        </IconButton>

        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
