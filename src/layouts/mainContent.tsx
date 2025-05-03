import { Navbar } from "../layouts/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export const MainContent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a23]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
