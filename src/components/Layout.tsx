import React from "react";
import { Outlet } from "react-router-dom";
import grainImage from "../../public/images/grain.gif";

const Layout: React.FC = () => {
  return (
    <div className="w-screen h-screen relative bg-black flex flex-col">
      <main className="flex-1 w-full h-full overflow-y-auto scrollbar-hide ">
        <Outlet />
      </main>

      <footer className="w-full text-white py-5 flex flex-col justify-center items-center">
        <div className="flex items-center gap-3 text-xs mb-2">
          <a
            href="https://anuragghosh.com"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Anurag Ghosh
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://anuragghosh.com/about"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            About
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://anuragghosh.com/contact"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
        <small className="text-gray-400 block">
          &copy; {new Date().getFullYear()} Anurag Ghosh. All rights reserved.
        </small>
      </footer>
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${grainImage})`,
          backgroundSize: "200px",
        }}
      />
    </div>
  );
};

export default Layout;
