"use client";
import React, { useContext, useState } from "react";
import { UiContext } from "@/app/context";
import { Button, Input, TextField, Typography } from "@mui/material";

export const ModalReqDocContent = () => {
  const { closeModal } = useContext(UiContext);
  const [formData, setFormData] = useState({
    formName: "",
    file: null,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: any) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    closeModal();
  };

  return (
    <>
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Formulario de solicitud
      </Typography>
      <TextField
        fullWidth
        label="Tipo de documento"
        name="formName"
        value={formData.formName}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />

      <Input
        type="file"
        name="file"
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
