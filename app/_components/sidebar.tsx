// components/Sidebar.tsx
import React from "react";
import { House, User, Briefcase, BookOpen, Settings, Folder } from 'lucide-react';
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="group hidden md:flex flex-col gap-4 rounded-md p-2 w-[4%]  bg-zinc-900 shadow-md text-white hover:w-[12%] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/75 p-2 rounded-md">
        <Link href='/' className="ml-2"><House/></Link>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Home
        </h1>
      </div>
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/75 p-2 rounded-md">
        <h1 className="ml-2"><User/></h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Personal Info
        </h1>
      </div>
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/75 p-2 rounded-md">
        <h1 className="ml-2"><Briefcase/></h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Experience
        </h1>
      </div>
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/75 p-2 rounded-md">
        <h1 className="ml-2"><BookOpen/></h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Education
        </h1>
      </div>
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/75 p-2 rounded-md">
        <h1 className="ml-2"><Settings/></h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Skills
        </h1>
      </div>
      <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/75 p-2 rounded-md">
        <h1 className="ml-2"><Folder/></h1>
        <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
          Projects
        </h1>
      </div>
      {/* Add more items as needed */}
    </div>
  );
};

export default Sidebar;
