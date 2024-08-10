import { DocsLayout } from "@/app/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BS | Validar documentos",
  description: "Validar documentos",
};

const ValidateDocsPage = () => {
  return (
    <DocsLayout title="Validar documentos" pageDescription="Validar documentos">
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Validar</h1>
        <span className="text-xl">Validar documentos</span>
      </div>
    </DocsLayout>
  );
};

export default ValidateDocsPage;
