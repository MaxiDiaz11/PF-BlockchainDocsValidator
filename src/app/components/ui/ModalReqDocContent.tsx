"use client";
import React, { useContext, useState } from "react";
import { UiContext } from "@/app/context";
import { Button, Input, Typography } from "@mui/material";
import { useSpecialDocs } from "@/app/hooks/useSpecialDocs";

export const ModalReqDocContent = () => {
  const { closeModal } = useContext(UiContext);
  const [file, setFile] = useState<File>();
  const { uploadDocument } = useSpecialDocs();

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Form Data:", file);
    if(file)
      uploadDocument(file)
    closeModal();
  };

  return (
    <>
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Formulario de solicitud
      </Typography>
      <Input
        type="file"
        name="file"
        accept="application/pdf" 
        onChange={handleFileChange}
        sx={{ mb: 2 }}
      />
      <Button
        color="secondary"
        className="circular-btn"
        size="large"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Solicitar
      </Button>
    </>
  );
};
