import { Navbar } from "../layouts/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { FaWhatsapp } from "react-icons/fa";

export const MainContent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a23]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://wa.me/573213437645" // ← pon aquí tu número con código país
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};
