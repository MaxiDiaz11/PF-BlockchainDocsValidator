import { DocsLayout } from "@/app/components/layouts";
import { Grid } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Block Solutions - Validador de documentos",
  description: "Validador de documentos de Block Solutions",
};

const MainPage = () => {
  return (
    <DocsLayout
      title="Block Solutions"
      pageDescription="BlockSolutions dashboard"
    >
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item sm={12}>
          <h1 className="mt-2 text-3xl">Proyecto Final</h1>
          <span className="text-xl">
            <b>Validador de documentación digital con Blockchain</b>
          </span>
        </Grid>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Grid>
      </Grid>
      <Grid item sm={12} sx={{ textAlign: "center", marginTop: 4 }}>
        <span className="text-xl ">
          <p>Arroyo, Ignacio</p>
          <p>Diaz, Maximiliano</p>
          <p>Guzman, Facundo</p>
          <p>Soria, Juan Pablo</p>
        </span>
      </Grid>
    </DocsLayout>
  );
};

export default MainPage;
