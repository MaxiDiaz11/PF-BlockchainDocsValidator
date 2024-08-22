"use client"
import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import AproveTable from "../ui/AproveTable";

import { usePathname } from 'next/navigation'
import { useSpecialDocs } from "@/app/hooks/useSpecialDocs";
import { Button, ButtonGroup } from "../../../../node_modules/@mui/material/index";


export const AproveDocAdmin = () => {

  const pathname: string = usePathname()
  const id = pathname.at(-1) ?? 0;

  const {updateStatus} = useSpecialDocs()

  const queryParams = new URLSearchParams({
    id: id.toString(),
  }).toString();


  const onAprobarDoc = (evt :React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    updateStatus(1,Number(id));
  }

  const onRechazarDoc = (evt:React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    updateStatus(2,Number(id));
  }
  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Aprobar documento
        </Typography>
        <Grid container spacing={2}>
          <iframe
            src={`${process.env.NEXT_PUBLIC_URL_API}/special-documents/id?${queryParams}`}
            height="100%"
            width="100%"
          ></iframe>
          <ButtonGroup 
          
          disableElevation
          variant="contained" >
              <Button color='success' onClick={e => onAprobarDoc(e)}>Aprobado</Button>
              <Button color='error' onClick={e => onRechazarDoc(e)}>Rechazado</Button>
          </ButtonGroup>
        </Grid>

      </Box>
    </>
  );
};
