import { Navbar } from "../layouts/navbar";
import { Outlet } from "react-router-dom";

export const MainContent = () => {
  return (
    <>
      <Navbar />
      <div className="m-4">
        <Outlet />
      </div>
    </>
  );
};
