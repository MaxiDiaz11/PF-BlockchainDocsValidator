"use client";
import React, { useContext, useState } from "react";
import { UiContext } from "@/app/context";
import { Button, Input, Typography } from "@mui/material";
import { useSpecialDocs } from "@/app/hooks/useSpecialDocs";
import Swal from 'sweetalert2'

export const ModalReqDocContent = () => {
  const { closeModal } = useContext(UiContext);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { uploadDocument } = useSpecialDocs();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        setError("El archivo debe ser un PDF.");
        setFile(null);
      } else {
        setError(null);
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = () => {
    if (!file) {
      setError("Por favor, selecciona un archivo PDF.");
      return;
    }

    uploadDocument(file)
      .then(data => {
        Swal.fire({
          title: 'Solicitud Exitosa',
          text: 'Tu solicitud fue cargada con éxito. Se le notificará por correo cuando la misma sea aprobada.',
          icon: 'success',
          confirmButtonText: 'Continuar'
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrió un error creando su solicitud. Por favor, intente más tarde.',
          icon: 'error',
          confirmButtonText: 'Continuar'
        });
      });
  };

  return (
    <>
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Formulario de solicitud
      </Typography>
      <Input
        type="file"
        name="file"
        inputProps={{
          accept: 'application/pdf',
        }}
        onChange={handleFileChange}
        sx={{ mb: 2 }}
        error={Boolean(error)}
      />
      {error && (
        <Typography variant="body2" color="error" mb={2}>
          {error}
        </Typography>
      )}
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
