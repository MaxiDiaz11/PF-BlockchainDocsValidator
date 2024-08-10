import { DocsLayout } from "@/app/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard BS",
  description: "Dashboard",
};

const MainPage = () => {
  return (
    <DocsLayout title="Dashboard" pageDescription="Admin dashboard">
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-xl">Información general</span>
      </div>
    </DocsLayout>
  );
};

export default MainPage;
