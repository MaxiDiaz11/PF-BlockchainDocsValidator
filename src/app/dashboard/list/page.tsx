import { DocsLayout } from "@/app/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BS | Listar documentos",
  description: "Listar documentos",
};

const ListDocsPage = () => {
  return (
    <DocsLayout title="Listar documentos" pageDescription="Listar documentos">
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Listar</h1>
        <span className="text-xl">Listar documentos</span>
      </div>
    </DocsLayout>
  );
};

export default ListDocsPage;
