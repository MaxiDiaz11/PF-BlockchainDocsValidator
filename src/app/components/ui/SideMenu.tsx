"use client";
import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  LoginOutlined,
  SearchOutlined,
  DocumentScannerOutlined,
  NoteAddOutlined,
  AssignmentTurnedInOutlined,
  InsertChartOutlined,
} from "@mui/icons-material";
import { UiContext } from "@/app/context";
import Link from "next/link";

export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      onClose={toggleSideMenu}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          <Link href={"/dashboard/profile"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
            </ListItem>
          </Link>

          <Link href={"/dashboard/list"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <DocumentScannerOutlined />
              </ListItemIcon>
              <ListItemText primary={"Mis documentos"} />
            </ListItem>
          </Link>

          <Link href={"/dashboard/generate"} passHref legacyBehavior>
            <ListItem
              button
              sx={{ display: { xs: "", sm: "none" } }}
              onClick={() => toggleSideMenu()}
            >
              <ListItemIcon>
                <NoteAddOutlined />
              </ListItemIcon>
              <ListItemText primary={"Generar  documentos"} />
            </ListItem>
          </Link>

          <Link href={"/dashboard/validate"} passHref legacyBehavior>
            <ListItem
              button
              sx={{ display: { xs: "", sm: "none" } }}
              onClick={() => toggleSideMenu()}
            >
              <ListItemIcon>
                <AssignmentTurnedInOutlined />
              </ListItemIcon>
              <ListItemText primary={"Validar documentos"} />
            </ListItem>
          </Link>

          {/* User */}
          <Link href={"/auth/login"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <LoginOutlined />
              </ListItemIcon>
              <ListItemText primary={"Salir"} />
            </ListItem>
          </Link>

          {/* Admin */}
          <Divider />
          <ListSubheader>Panel de administrador</ListSubheader>
          <Link href={"/dashboard/admin/aprobar-doc"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
              <ListItemIcon>
                <AssignmentTurnedInOutlined />
              </ListItemIcon>
              <ListItemText primary={"Aprobar documentación"} />
            </ListItem>
          </Link>
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
        </List>
      </Box>
    </Drawer>
  );
};
