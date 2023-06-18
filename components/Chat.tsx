"use client";

import Sidebar from "./Sidebar";

export default function Chat() {
  return (
    <div className="container w-full">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-2">
          <Sidebar />
        </div>
        <div className="col-start-2 col-end-7">MAINPAGE</div>
      </div>
    </div>
  );
}
