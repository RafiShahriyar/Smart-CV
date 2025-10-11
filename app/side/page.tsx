// components/Sidebar.tsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="group hidden md:flex flex-col gap-4 rounded-md p-2 w-[4%] border bg-white shadow-md text-black hover:w-[12%] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
        <h1 className="ml-2">H1</h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Home
        </h1>
      </div>
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
        <h1 className="ml-2">C1</h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Personal Info
        </h1>
      </div>
      {/* Add more items as needed */}
    </div>
  );
};

export default Sidebar;
