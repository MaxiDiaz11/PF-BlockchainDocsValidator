"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useSpecialDocs } from "@/app/hooks/useSpecialDocs";
import { useRouter } from "../../../../node_modules/next/navigation";
import DocListAdminTable from "../ui/DocListAdminTable";

export const SearchDocAdmin = () => {
  const [legajo, setLegajo] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const { filterSpecialDoc } = useSpecialDocs();
  const [specialDocuments, setSpecialDocuments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    try {
      setSpecialDocuments([])
      filterSpecialDoc(status, name, legajo).then((data) => {
        setSpecialDocuments(data);
      });
    } catch (error) {
      console.error("Error getting files", error);
    }
  }, []);

  const handleChangeLegajo = (event: SelectChangeEvent) => {
    setLegajo(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(Number(event.target.value));
  };

  const searchDocs = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const data = await filterSpecialDoc(status, name, legajo).then((data) => {
        setSpecialDocuments(data);
      });
    } catch (error) {
      console.error("Error getting files", error);
    }
  };

  return (
    <>
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          Buscar documento
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <FormControl variant="standard" sx={{ minWidth: "100%"}}>
            <InputLabel id="demo-simple-select-legajo" sx={{marginLeft: 1}}>Legajo</InputLabel>
            <Select
              variant="filled"
              labelId="demo-simple-select-legajo"
              id="demo-simple-legajo"
              fullWidth
              label="Legajo"
              onChange={handleChangeLegajo}
            >
              <MenuItem value={"48393"}>48393</MenuItem>
              <MenuItem value={"48453"}>48453</MenuItem>
              <MenuItem value={"48409"}>48409</MenuItem>
            </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Nombre del Alumno"
              type="text"
              variant="filled"
              fullWidth
              onChange={(evt) => setName(evt.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
          <FormControl variant="standard" sx={{ minWidth: "100%"}}>
            <InputLabel id="demo-simple-select-label" sx={{marginLeft: 1}}>Estado</InputLabel>
            <Select
              variant="filled"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              label="Estado"
              onChange={handleChange}
            >
              <MenuItem value={0}>Pendiente</MenuItem>
              <MenuItem value={1}>Aprobado</MenuItem>
              <MenuItem value={2}>Rechazado</MenuItem>
            </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            onClick={(e) => searchDocs(e)}
          >
            Buscar documento
          </Button>
        </Grid>
      </Box>
      <Grid item xs={12}>
        <DocListAdminTable rows={specialDocuments}/>
      </Grid>
    </>
  );
};
