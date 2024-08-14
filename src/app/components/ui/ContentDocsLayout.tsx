"use client";
import React from "react";
import { Box, useTheme } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ContentDocsLayout = ({ children }: Props) => {
  const theme = useTheme();
  const appBarHeight = theme.mixins.toolbar.minHeight || 64;
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: `${appBarHeight}px`,
        marginBottom: `${appBarHeight}px`,
      }}
    >
      {children}
    </Box>
  );
};
