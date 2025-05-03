import { Navbar } from "../layouts/navbar";
import { Outlet } from "react-router-dom";

export const MainContent = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-5 bg-blue-100 my-5 rounded ">
        <Outlet />
      </div>
    </>
  );
};
