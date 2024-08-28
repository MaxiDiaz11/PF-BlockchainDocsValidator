"use client";
import React, { useEffect, useState } from "react";
import { Grid, Tab, Box, Tabs, Typography } from "@mui/material";
import { useDocs } from "@/app/hooks/useDocs";
import DataGridDocs from "./DataGridDocs";
import DataGridSpecialDocs from "./DataGridSpecialDocs";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DocsList = () => {
  const { getDocs } = useDocs();
  const [documents, setDocuments] = useState([]);
  const [specialDocuments, setSpecialDocuments] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getDocs().then((data) => {
      setDocuments(data.documents || []);
      setSpecialDocuments(data.specialDocuments || []);
    });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid item>
          <Box sx={{ mb: 2, borderBottom: 1, borderColor: "divider" }}>
            <Tabs onChange={handleChange} centered value={value}>
              <Tab label="Documentos" {...a11yProps(0)} />
              <Tab label="Documentos Especiales" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {documents.length > 0 ? (
              <DataGridDocs rows={documents} />
            ) : (
              <Typography variant="h6" align="center">
                No hay documentos disponibles.
              </Typography>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {specialDocuments.length > 0 ? (
              <DataGridSpecialDocs rows={specialDocuments} />
            ) : (
              <Typography variant="h6" align="center">
                No hay documentos especiales disponibles.
              </Typography>
            )}
          </CustomTabPanel>
        </Grid>
      </Grid>
    </>
  );
};
