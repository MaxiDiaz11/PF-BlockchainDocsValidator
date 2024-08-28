"use client";
import { FC, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { useDocs } from "@/app/hooks/useDocs";
import { IconButton } from "../../../../node_modules/@mui/material/index";
import { getDate } from "@/app/util/utils";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
interface Props {
  documentName?: string;
  documentStatus?: string;
}

export const SearchDocsForm: FC = () => {
  const [hash, setHash] = useState("");
  const { validateDoc } = useDocs();
  const [fileFromBlockchain, setFileFromBlockchain] = useState<any>();
  const [fileFound, setFileFound] = useState(false);
  const [hashError, setHashError] = useState(false);
 

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setHashError(false);
    let valid = true;

    if (hash === "") {
      setHashError(true);
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const data = await validateDoc(hash);
      setFileFromBlockchain(data);
      setFileFound(true);
    } catch (err) {
      console.error("File doesnt exist:", err);
      setFileFound(false);
    }
  };

  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
              onChange={(e) => {
                setHash(e.target.value)
                setHashError(false);
              }}
              error={hashError}
              helperText={hashError ? "Por favor, ingrese un hash." : ""}
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
              <ContentPasteSearchIcon sx={{marginRight: 1}}/>
              Buscar documento
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12} sx={{ marginTop: 4 }}>
        {fileFound && (
          <>
            <Typography variant="h6" sx={{ marginTop: 3 }}>
              Estado:{" "}
              <Chip
                label={
                  fileFound ? "Documento Valido" : "Documento No Encontrado"
                }
                color={fileFound ? "success" : "error"}
              />
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
              <Typography
                variant="body1"
                sx={{ marginTop: 2, fontWeight: "bold" }}
              >
                {fileFromBlockchain?.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginY: 2, fontWeight: "bold" }}
              >
                {getDate(fileFromBlockchain?.uploadDate)}
              </Typography>
              <IconButton
                className="circular-btn"
                onClick={(e) =>
                  openLinkInNewTab(
                    `https://ipfs.filebase.io/ipfs/${fileFromBlockchain.hash}`
                  )
                }
              >
                <DownloadForOfflineRoundedIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
