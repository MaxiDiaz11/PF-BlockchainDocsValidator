"use client";
import React, { useContext } from "react";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { UiContext } from "@/app/context";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import NextLink from "next/link";

export const NavBar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const page = usePathname();

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Block | Solutions</Typography>{" "}
            <BlurOnIcon />
          </Link>
        </NextLink>

        <Box flex={1}></Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/dashboard/generate" legacyBehavior>
            <Link>
              <Button
                color={page === "/dashboard/generate" ? "primary" : "info"}
              >
                Generar
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/dashboard/validate" legacyBehavior>
            <Link>
              <Button
                color={page === "/dashboard/validate" ? "primary" : "info"}
              >
                Validar
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/dashboard/list" legacyBehavior>
            <Link>
              <Button color={page === "/dashboard/list" ? "primary" : "info"}>
                Listar
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1}></Box>

        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
