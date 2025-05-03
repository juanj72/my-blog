import { Navbar } from "../layouts/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export const MainContent = () => {
  return (
    <div className="bg-[#0a0a23]">
      <Navbar />
      <div className="container mx-auto  bg-white shadow my-5 rounded ">
        <Outlet />
      </div>
    <Footer />
    </div>
  );
};
