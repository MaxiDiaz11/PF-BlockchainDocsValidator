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
import CloseIcon from '@mui/icons-material/Close';

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
          {/* Admin */}
          <Divider />
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
          <ListSubheader>Sesión</ListSubheader>
          <Link href={"/dashboard/main"} passHref legacyBehavior>
            <ListItem button onClick={() => toggleSideMenu()}>
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
