import { Navbar } from "../layouts/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const MainContent = () => {
  return (
    <div className="bg-[#0a0a23] relative ">
      <Navbar />
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>
      <Footer />

      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};
