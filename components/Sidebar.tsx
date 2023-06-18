import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black flex flex-col justify-between">
      <div className="flex justify-center items-center h-16 mb-8">
        <Image
          src="/media/logos/frontedgeLogoLight.png"
          alt="FrontEdge IT AB logo"
          width={160}
          height={60}
        />
      </div>
      <div className="text-center mb-4 text-slate-200">
        <h1>Made by FrontEdge IT team</h1>
      </div>

      {/* Add other sidebar content here */}
    </div>
  );
};

export default Sidebar;
