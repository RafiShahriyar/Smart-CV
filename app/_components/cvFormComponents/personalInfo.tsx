import React from "react";
import { CVDataPersonal } from "../../cv-maker/page";
import { Camera } from 'lucide-react';

interface Props {
  cvDataPersonal: CVDataPersonal;
  setCvDataPersonal: React.Dispatch<React.SetStateAction<CVDataPersonal>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const PersonalInfo: React.FC<Props> = ({ cvDataPersonal, setCvDataPersonal, handleNextStep, handlePreviousStep }) => {
  return (
    <div className="space-y-4 text-black  bg-white shadow-2xl p-10 rounded-sm h-screen ">
      <div className="flex flex-row gap-1">        
        <h2 className="text-xl font-semibold text-purple-600">Personal </h2>
        <h2 className="text-xl font-semibold">Details </h2>
      </div>
      <div className="grid grid-cols-12 gap-4 grid-flow-dense">

        {/* Photo */}
        <div className="md:col-span-4 col-span-2 row-span-2 group relative">
            <input
                id="photo"
                type="file"
                accept="image/*"
                onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    // Example: preview or save
                    setCvDataPersonal({ ...cvDataPersonal, photo: URL.createObjectURL(file) });
                }
                }}
                className="hidden"
            />
            <label
            htmlFor="photo"
            className="border border-gray-400 rounded-sm flex items-center justify-center p-6 w-full h-full text-md text-gray-500 cursor-pointer hover:border-purple-600 transition-all duration-300"
            >
            {cvDataPersonal.photo ? (
                <img
                src={cvDataPersonal.photo}
                alt="Preview"
                className="w-full h-full object-cover rounded-sm"
                />
            ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                <Camera className="w-10 h-10 text-gray-400" /> {/* bigger icon */}
                <p className="text-sm text-gray-500">Upload image (optional)</p>
                </div>
            )}
            </label>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* First Name */}
        <div className="md:col-span-8 col-span-10 row-span-1 group relative">
            <label htmlFor="firstName" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                First Name
            </label>
            <input
                type="tel"
                placeholder="first name"
                value={cvDataPersonal.firstName}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, firstName: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* Last Name */}
        <div className="md:col-span-8 col-span-10 row-span-1 group relative">
            <label htmlFor="lastName" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Last Name
            </label>
            <input
                type="tel"
                placeholder="last name"
                value={cvDataPersonal.lastName}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, lastName: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* Job Title */}
        <div className="col-span-6 group relative">
            <label htmlFor="jobTitle" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Job Title
            </label>
            <input
                type="jobTitle"
                placeholder="jobTitle"
                value={cvDataPersonal.jobTitle}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, jobTitle: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* Email */}
        <div className="col-span-6 group relative">
            <label htmlFor="email" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Email
            </label>
            <input
                type="tel"
                placeholder="email"
                value={cvDataPersonal.email}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, email: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* Contact No. */}
        <div className="col-span-6 group relative">
            <label htmlFor="phone" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Contact No.
            </label>
            <input
                type="tel"
                placeholder="Contact number"
                value={cvDataPersonal.phone}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, phone: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* LinkedIn*/}
        <div className="col-span-3 group relative">
            <label htmlFor="linkedIn" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                linkedIn
            </label>
            <input
                type="linkedIn"
                placeholder="linkedIn"
                value={cvDataPersonal.linkedIn}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, linkedIn: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* github*/}
        <div className="col-span-3 group relative">
            <label htmlFor="github" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Github
            </label>
            <input
                type="github"
                placeholder="github"
                value={cvDataPersonal.github}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, github: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>        

        {/* Address */}
        <div className="col-span-12 group relative">
            <label htmlFor="address" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Address
            </label>
            <input
                type="address"
                placeholder="Address"
                value={cvDataPersonal.address}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, address: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* Country */}
        <div className="col-span-6 group relative ">
            <label htmlFor="country" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                Country
            </label>
            <input
                type="country"
                placeholder="country"
                value={cvDataPersonal.country}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, country: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* City */}
        <div className="col-span-6 group relative ">
            <label htmlFor="city" className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-purple-600">
                City
            </label>
            <input
                type="city"
                placeholder="city"
                value={cvDataPersonal.city}
                onChange={(e) =>
                setCvDataPersonal({ ...cvDataPersonal, city: e.target.value })
                }
                className="border border-gray-400 p-2 w-full text-md outline-none rounded-sm"
            />
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
        </div>

        {/* Progress Bars */}
        <div className=" col-span-3 w-full border-2 border-purple-600 mt-56"></div>
        <div className=" col-span-3 w-full border-2 border-gray-200 mt-56"></div>
        <div className=" col-span-3 w-full border-2 border-gray-200 mt-56"></div>
        <div className=" col-span-3 w-full border-2 border-gray-200 mt-56"></div>

        {/* Progress Dots */}
        <div className="col-span-9 flex flex-row gap-2 mt-4 pl-4 ">
            {/* <div className="w-3 h-3 rounded-full bg-purple-600"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-200"></div> */}
        </div>

        <button 
            className=" col-span-3 flex justify-center items-center rounded-lg mt-5
          bg-purple-700 border-2 hover:bg-white
          hover:border-purple-700 hover:text-purple-600 text-white px-10 py-2"
          onClick={handleNextStep}
        >
            Next
        </button>
        
      </div>     



      {/* <textarea
        placeholder="Education"
        value={cvDataPersonal.address}
        onChange={(e) => setCvDataPersonal({ ...cvDataPersonal, address: e.target.value })}
        className="border p-2 w-full"
      /> */}
    </div>
  );
};

export default PersonalInfo;
