"use client";
import React, { useContext, useState } from "react";
import { UiContext } from "@/app/context";
import { Box, Button, Typography } from "@mui/material";
import { useSpecialDocs } from "@/app/hooks/useSpecialDocs";
import { toast } from "sonner";

export const ModalReqDocContent = () => {
  const { closeModal } = useContext(UiContext);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { uploadDocument } = useSpecialDocs();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const validName = /^[a-zA-Z0-9_\-]+$/.test(
        selectedFile.name.replace(/\.[^/.]+$/, "")
      );

      if (selectedFile.type !== "application/pdf") {
        setError("El archivo debe ser un PDF.");
        setFile(null);
      } else if (!validName) {
        setError(
          "El nombre del archivo solo puede contener letras, números, guiones medios y bajos."
        );
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
      .then((_) =>
        toast.success(`Solicitud de documentación creada con éxito`)
      )
      .catch((_) =>
        toast.error(
          `Hubo un error subiendo su documento, intente más tarde`
        )
      )
      .finally(() => closeModal());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Formulario de solicitud
      </Typography>

      <label
        htmlFor="file"
        style={{
          height: "200px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          cursor: "pointer",
          border: "2px dashed #e8e8e8",
          backgroundColor: "#212121",
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0px 48px 35px -48px #e8e8e8",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="#e8e8e8"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "80px" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
              fill=""
            ></path>
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontWeight: 400,
              color: "#e8e8e8",
            }}
          >
            {file ? file.name : "Subir PDF"}
          </span>
        </div>
        <input
          id="file"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </label>

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
        disabled={error}
        onClick={handleSubmit}
      >
        Solicitar
      </Button>
    </Box>
  );
};
