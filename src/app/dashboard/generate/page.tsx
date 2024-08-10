import { DocsLayout } from "@/app/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BS | Generar documentos",
  description: "Generar documentos",
};

const GenDocsPage = () => {
  return (
    <DocsLayout title="Generar documentos" pageDescription="Generar documentos">
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Generar</h1>
        <span className="text-xl">Generar documentos</span>
      </div>
    </DocsLayout>
  );
};

export default GenDocsPage;
