import React from "react";
import { Outlet } from "react-router-dom";
import grainImage from "../../public/images/grain.gif";

const Layout: React.FC = () => {
  return (
    <div className="w-screen h-screen relative bg-black flex flex-col font-mono">
      <main className="flex-1 w-full h-full overflow-y-auto scrollbar-hide ">
        <Outlet />
      </main>

      <footer className="w-full text-white py-5 flex flex-col justify-center text-[0.65rem] md:text-xs items-center">
        <div className="flex items-center gap-1 md:gap-3 mb-1 md:mb-2">
          <a
            href="https://anuragghosh.com"
            rel="noopener noreferrer"
            title="Anurag Ghosh"
            className="text-gray-400 hover:text-white transition"
          >
            Anurag Ghosh
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://anuragghosh.com/about"
            rel="noopener noreferrer"
            title="About Anurag Ghosh"
            className="text-gray-400 hover:text-white transition"
          >
            About
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://anuragghosh.com/contact"
            rel="noopener noreferrer"
            title="Contact Anurag Ghosh"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
        <span className="text-gray-400 block">
          &copy; {new Date().getFullYear()} Anurag Ghosh. All rights reserved.
        </span>
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
