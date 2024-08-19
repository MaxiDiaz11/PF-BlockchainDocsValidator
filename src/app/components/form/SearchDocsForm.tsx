"use client"
import { FC, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Chip,
  Fab,
} from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { useDocs } from "@/app/hooks/useDocs";

interface Props {
  documentName?: string;
  documentStatus?: string;
}

export const SearchDocsForm: FC<Props> = ({ documentName, documentStatus }) => {

  const [hash,setHash] = useState("")
  const {validateDoc} = useDocs()

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      const data = await validateDoc(hash)
      console.log(data)
    } catch (err) {
      console.error("Login failed:", err);
    }
  };


  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Encuentra tu certificado universitario
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Hash del documento"
              type="text"
              variant="filled"
              fullWidth
              value={hash}
              onChange={e => setHash(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Buscar documento
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12} sx={{ marginTop: 4 }}>
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Tipo de certificado:
        </Typography>

        <Typography variant="body1" sx={{ marginTop: 3 }}>
          Estado: <Chip label="Documento válido" color="success" />
        </Typography>

        <Grid
          item
          xs={12}
          sx={{
            border: "1px solid",
            paddingX: 2,
            paddingY: 1,
            marginTop: 3,
            borderRadius: 10,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ marginTop: 2, fontWeight: "bold" }}>
            Certificado de alumno regular
          </Typography>
          <Fab className="circular-btn">
            <DownloadForOfflineRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};
