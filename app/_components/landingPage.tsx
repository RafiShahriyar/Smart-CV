import React from "react";
import Aurora from "../_components/react-bits/aurora";
import Link from "next/link";
import { CheckCircle, FileText, Sparkles } from 'lucide-react';
import logo from "../../assets/smart-cv-high-resolution-logo-transparent (1).png";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative h-auto w-screen overflow-hidden ">

      {/* Aurora background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Aurora
          colorStops={["#BD0F97", "#0B0E0E", "#9204B9"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Navbar overlay */}
      <div className="relative z-20 
                      bg-white/10 
                      backdrop-blur-lg 
                      rounded-full 
                      mx-auto 
                      w-11/12 sm:w-2/4 
                      mt-5 mb-2 
                      border border-white/20 
                      shadow-white/20 
                      p-3 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center gap-2 pl-3">
          <Image
            src={logo}   // Place your logo in public/logo.png
            alt="Smart CV Logo"
            width={100}        // adjust size
            height={200}
            className="rounded-md"
          />
          {/* <span className="text-zinc-300 text-lg font-bold hover:text-fuchsia-600">
            SMART-CV
          </span> */}
        </Link>

        <div className="flex gap-4 pr-5">
          <Link href="/" className="text-white text-lg font-normal hover:text-purple-500">CV</Link>
          <Link href="/" className="text-white text-lg font-normal hover:text-purple-500">Log-In</Link>
          <Link href="/" className="text-white text-lg font-normal hover:text-purple-500">Sign-up</Link>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white px-4 text-center mt-10 sm:mt-28">
        <div className="flex flex-row gap-2">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Build your Resume in </h1>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-purple-600">Minutes </h1>
        </div>
        <p className="text-base sm:text-3xl mb-10">
          Create, customize, and export your CV effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href='/cv-maker'>
            <button className="text-xl px-7 py-2 rounded-full border border-gray-400 bg-white text-black hover:scale-105 transition transform duration-300">
                Try Now
            </button>
          </Link>
          <Link href='/side'>
            <button className="text-xl px-7 py-2  backdrop-blur-md rounded-full  bg-purple-600 hover:scale-105 transition transform duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Cards section */}
      <div className="relative z-20 mx-auto w-11/12 sm:w-3/4 flex flex-col sm:flex-row gap-6 sm:gap-4 mt-16 sm:mt-28 ">
        
        {/* Card 1 */}
        <div className="p-6 bg-transparent rounded-lg shadow-md text-white w-full sm:flex-1 
                        transition duration-300 ease-in-out hover:scale-95
                        hover:shadow-lg hover:shadow-fuchsia-700/50 border border-transparent hover:border-fuchsia-700">
          <h1 className="font-bold text-3xl mb-8 text-center ">Create CV</h1>
          <div className="flex justify-center items-center">
            <ul className="text-xl space-y-2 text-left">
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /> Easy step-by-step form</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Export to PDF & Word</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-yellow-400" /> Optimized for recruiters</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-transparent rounded-lg shadow-md text-white w-full sm:flex-1 
                        transition duration-300 ease-in-out hover:scale-95
                        hover:shadow-lg hover:shadow-fuchsia-700/50 border border-transparent hover:border-fuchsia-700">
          <h1 className="font-bold text-3xl mb-8 text-center ">Choose Template</h1>
          <div className="flex justify-center items-center">
            <ul className="text-xl space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Modern & clean designs</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-400" /> Multiple resume layouts</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-pink-400" /> ATS-friendly formatting</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-transparent rounded-lg shadow-md text-white w-full sm:flex-1 
                        transition duration-300 ease-in-out hover:scale-95
                        hover:shadow-lg hover:shadow-purple-700/50 border border-transparent hover:border-purple-700">
          <h1 className="font-bold text-3xl mb-8 text-center ">Generate with AI</h1>
          <div className="flex justify-center items-center">
            <ul className="text-xl space-y-2 text-left">
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-400" /> AI-powered job matching</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Auto-generate summaries</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-cyan-400" /> Tailored keywords for ATS</li>
            </ul>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-6 bg-transparent rounded-lg shadow-md text-white w-full sm:flex-1 
                        transition duration-300 ease-in-out hover:scale-95
                        hover:shadow-lg hover:shadow-purple-700/50 border border-transparent hover:border-purple-700">
          <h1 className="font-bold text-3xl mb-8 text-center ">Generate with AI</h1>
          <div className="flex justify-center items-center">
            <ul className="text-xl space-y-2 text-left">
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-400" /> AI-powered job matching</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Auto-generate summaries</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-cyan-400" /> Tailored keywords for ATS</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LandingPage;
