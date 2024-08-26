"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import { useDocs } from "@/app/hooks/useDocs";
import DocListTable from "./DocListTable";
import DocSpecialListTable from "./DocSpecialListTable";

export const DocsList = () => {
  const { getDocs } = useDocs();
  const [documents, setDocuments] = useState([]);
  const [specialDocuments, setSpecialDocuments] = useState([]);

  useEffect(() => {
    getDocs().then((data) => {
      setDocuments(data.documents);
      setSpecialDocuments(data.specialDocuments);
    });
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Grid item>
          <Typography variant="h6" marginBottom={2} textAlign={"center"}>
            Documentos
          </Typography>
          <DocListTable rows={documents} />
        </Grid>
        <Grid item sx={{ marginTop: 4 }}>
          <Typography variant="h6" marginBottom={2} textAlign={"center"}>
            Documentos Especiales
          </Typography>

          <DocSpecialListTable rows={specialDocuments} />
        </Grid>
      </Grid>
    </>
  );
};
