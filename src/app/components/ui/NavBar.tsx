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
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '200px' }}>
          <NextLink href="/" passHref legacyBehavior>
            <Link display="flex" alignItems="center">
              <Typography variant="h6">Block | Solutions</Typography>
              <BlurOnIcon />
            </Link>
          </NextLink>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NextLink href="/dashboard/generate" legacyBehavior>
              <Link>
                <Button
                  sx={{ fontSize: 16}}
                  color={page === "/dashboard/generate" ? "primary" : "info"}
                >
                  Generar
                </Button>
              </Link>
            </NextLink>
            <NextLink href="/dashboard/validate" legacyBehavior>
              <Link>
                <Button
                  sx={{ fontSize: 16}}
                  color={page === "/dashboard/validate" ? "primary" : "info"}
                >
                  Validar
                </Button>
              </Link>
            </NextLink>
            <NextLink href="/dashboard/list" legacyBehavior>
              <Link>
                <Button
                  sx={{ fontSize: 16}}
                  color={page === "/dashboard/list" ? "primary" : "info"}
                >
                  Listar
                </Button>
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Box sx={{ width: '200px', textAlign: 'right' }}>
          <Button sx={{ fontSize: 16}} onClick={toggleSideMenu}>Menú</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};