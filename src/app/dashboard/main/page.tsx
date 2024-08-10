import { DocsLayout } from "@/app/components/layouts";
import { Metadata } from "next";

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
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-xl">Información general</span>
      </div>
    </DocsLayout>
  );
};

export default MainPage;
