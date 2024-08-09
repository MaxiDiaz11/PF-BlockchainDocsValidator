import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard",
};

const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
    </div>
  );
};

export default MainPage;
