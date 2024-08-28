import { DocsLayout } from "@/app/components/layouts";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import BlurOnIcon from "@mui/icons-material/BlurOn";

export const metadata: Metadata = {
  title: "Block Solutions | Validador de documentos",
  description: "Validador de documentos de Block Solutions",
};

const MainPage = () => {
  return (
    <DocsLayout
      title="Block Solutions"
      pageDescription="BlockSolutions dashboard"
    >
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 5, md: 10, lg: 20 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "50%" },
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              background: "#000",
              borderRadius: 5,
              width: { xs: "100%", sm: "60%", md: 200 },
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                padding: 2,
                fontSize: { xs: 16, sm: 18, md: 20 },
                textAlign: "center",
              }}
            >
              Proyecto Final
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "80%", md: 400 } }}>
            <Typography
              sx={{
                color: "#000",
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
              }}
            >
              Validador de documentación digital con Blockchain.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            {["Arroyo, Ignacio", "Diaz, Maximiliano", "Guzman, Facundo", "Soria, Juan Pablo"].map(
              (name) => (
                <Typography key={name} sx={{ fontWeight: "bold", marginBottom: { xs: 1, sm: 0 } }}>
                  {name}
                </Typography>
              )
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "70%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            marginTop: { xs: 4, md: 0 },
            position: 'relative'
          }}
        >
          <Box sx={{ background: '#222', padding: 3, borderRadius: 999 }}>
            <Box sx={{ background: '#333', padding: 3, borderRadius: 999 }}>
              <Image
                src={"/img/BlockSolutions.png"}
                alt="BlockSolutions"
                sizes="100vw"
                width={400}
                height={400}
                priority
                style={{
                  borderRadius: "50%",
                  maxWidth: "100%",
                  height: "auto",
                  boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Box>
          </Box>
          <BlurOnIcon sx={{ position: 'absolute', right: 0, height: 80, width: 80}}/>
          <BlurOnIcon sx={{ position: 'absolute', left: 0, bottom: 0, height: 80, width: 80}}/>
        </Box>
      </Box>
    </DocsLayout>
  );
};

export default MainPage;