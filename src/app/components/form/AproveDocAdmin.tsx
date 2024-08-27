"use client"
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
          <Grid item sx={{width: "100%", height: "50vh"}}>
            <iframe
              src={`${process.env.NEXT_PUBLIC_URL_API}/special-documents/id?${queryParams}`}
              height="100%"
              width="100%"
            ></iframe>
          </Grid>
          <Grid item
           sx={{ diplay:"flex",marginTop:4, justifyContent:"center", mx:"auto"}}>
            <ButtonGroup
              disableElevation
              variant="contained" >
                    <Button color='success' onClick={e => onAprobarDoc(e)}>Aprobar</Button>
                    <Button color='error' onClick={e => onRechazarDoc(e)}>Rechazar</Button>
              </ButtonGroup>
          </Grid>
          
        </Grid>

      </Box>
    </>
  );
};
