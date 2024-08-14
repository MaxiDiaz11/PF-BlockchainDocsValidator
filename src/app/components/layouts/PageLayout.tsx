import React from "react";
import { Divider, Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({ children, title }: Props) => {
  return (
    <>
      <Grid item className="text-black mt-2" sx={{ textAlign: "center" }}>
        <h1 className="mt-2 text-3xl">{title}</h1>
        <Divider />
      </Grid>

      <Grid container spacing={2}>
        {children}
      </Grid>
    </>
  );
};
