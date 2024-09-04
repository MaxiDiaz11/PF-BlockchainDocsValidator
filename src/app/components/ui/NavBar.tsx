"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { UiContext } from "@/app/context";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import NextLink from "next/link";

export const NavBar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const page = usePathname();

  const [isAdmin,setIsAdmin] = useState("");

  useEffect(()=> {
    const session = sessionStorage.getItem("isAdmin");
    if (session)
      setIsAdmin(session);
  },[])

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
        {isAdmin === "false" &&  (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NextLink href="/dashboard/generate" legacyBehavior>
              <Link>
                <Button
                  sx={{ fontSize: 16}}
                  color={page === "/dashboard/generate" ? "primary" : "info"}
                >
                  Solicitar
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
        )}
         {isAdmin === "true" &&  (
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NextLink href="/dashboard/admin/buscar-doc" legacyBehavior>
                  <Link>
                    <Button
                      sx={{ fontSize: 16}}
                      color={page === "/dashboard/admin/buscar-doc" ? "primary" : "info"}
                    >
                      Buscar Petición
                    </Button>
                  </Link>
                </NextLink>
                <NextLink href="/dashboard/admin/estadisticas" legacyBehavior>
                  <Link>
                    <Button
                      sx={{ fontSize: 16}}
                      color={page === "/dashboard/admin/estadisticas" ? "primary" : "info"}
                    >
                      Estadísticas
                    </Button>
                  </Link>
                </NextLink>
              </Box>
            </Box>
          )}
          <Box sx={{ width: '200px', textAlign: 'right' }}>
          <Button sx={{ fontSize: 16}} onClick={toggleSideMenu}>Menú</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};