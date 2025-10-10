import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="group hidden md:flex flex-col gap-4 round-md p-2 w-[4%] border bg-white shadow-md text-black hover:w-[14%] transition-all duration-300 ease-in-out overflow-hidden">
        <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
          <h1>H1</h1>
          <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
            Home
          </h1>
        </div>
        <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
          <h1>C1</h1>
          <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
            Personal Info
          </h1>
        </div>
        <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
          <h1>C1</h1>
          <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
            Hello World
          </h1>
        </div>
        <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
          <h1>C1</h1>
          <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
            Hello World
          </h1>
        </div>
        <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
          <h1>C1</h1>
          <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
            Hello World
          </h1>
        </div>
        <div className="flex items-center gap-6 cursor-pointer hover:bg-purple-600/20 p-2 rounded-md">
          <h1>C1</h1>
          <h1 className="whitespace-nowrap opacity-0 group-hover:opacity-100">
            Hello World
          </h1>
        </div>
        <div className="border-2 4"></div>
      </div>

      {/* Mobile Sidebar */}
      <div className="bg-white p-4 md:hidden flex flex-row gap-4 p-4 text-black mx-auto min-w-screen">
        <div className="flex flex-row">
          <h1>H1</h1>
          <h1> Hello World</h1>
        </div>
        <p>C1</p>
        <p>C2</p>
        <p>C3</p>
        <p>C4</p>
        <p>C5</p>
        <p>C6</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-black">HHHHHH</div>
      <div className="flex-1 bg-purple-600"></div>
    </div>
  );
};

export default Home;
