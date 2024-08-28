"use client";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  SearchOutlined,
  InsertChartOutlined,
} from "@mui/icons-material";
import { UiContext } from "@/app/context";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import { Build, FormatListNumbered, VerifiedUser } from "@mui/icons-material";



export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

  const [isAdmin,setIsAdmin] = useState("");

  useEffect(()=> {
    const session = sessionStorage.getItem("isAdmin");
    if (session)
      setIsAdmin(session);
  },[])

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      onClose={toggleSideMenu}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          {/* Alumno */}
          <Divider />
          {isAdmin === "false" &&  (<>
          <ListSubheader>Panel de Alumno</ListSubheader>
          <Link href={"/dashboard/generate"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary={"Generar"} />
            </ListItem>
          </Link>
          <Link href={"/dashboard/validate"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <VerifiedUser />
              </ListItemIcon>
              <ListItemText primary={"Validar"} />
            </ListItem>
          </Link>
          <Link href={"/dashboard/list"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <FormatListNumbered />
              </ListItemIcon>
              <ListItemText primary={"Listar"} />
            </ListItem>
          </Link>
          <Divider /></>)}
          {/* Admin */}
          {isAdmin === "true" &&  (<><Divider />
        <ListSubheader>Panel de administrador</ListSubheader>
        <Link href={"/dashboard/admin/buscar-doc"} passHref legacyBehavior>
          <ListItem button onClick={() => toggleSideMenu()}>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText primary={"Buscar petición"} />
          </ListItem>
        </Link>
        <Link href={"/dashboard/admin/estadisticas"} passHref legacyBehavior>
          <ListItem button onClick={() => toggleSideMenu()}>
            <ListItemIcon>
              <InsertChartOutlined />
            </ListItemIcon>
            <ListItemText primary={"Obtener estadísticas"} />
          </ListItem>
        </Link>
        <Divider />
        </>)
        }
          
          {/*Sesion*/}
          <ListSubheader>Sesión</ListSubheader>
          <Link href={"/auth/login"} passHref legacyBehavior>
            <ListItem button onClick={() => {
              toggleSideMenu()
              sessionStorage.clear();
            }}>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary={"Cerrar Sesión"} />
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};
