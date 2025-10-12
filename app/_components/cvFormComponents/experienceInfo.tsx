"use client";
import React, { useState } from "react";
import { CVDataExperience } from "../../cv-maker/page";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface Props {
  cvDataExperience: CVDataExperience[];
  setCvDataExperience: React.Dispatch<React.SetStateAction<CVDataExperience[]>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const ExperienceInfo: React.FC<Props> = ({
  cvDataExperience,
  setCvDataExperience,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAddExperience = () => {
    setCvDataExperience([
      ...cvDataExperience,
      {
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    setOpenIndex(cvDataExperience.length);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...cvDataExperience];
    (updated[index] as any)[field] = value;
    setCvDataExperience(updated);
  };

  const handleRemoveExperience = (index: number) => {
    const updated = cvDataExperience.filter((_, i) => i !== index);
    setCvDataExperience(updated);
    if (openIndex === index) setOpenIndex(null);
  };

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-2xl rounded-sm">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-10 space-y-6 text-black">
        <h2 className="text-xl font-semibold text-purple-600">Experience</h2>

        {cvDataExperience.map((exp, index) => (
          <div
            key={index}
            className="border border-purple-700 rounded-md overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center p-3 bg-white cursor-pointer"
              onClick={() => toggleCollapse(index)}
            >
              <span className="font-medium">
                {exp.jobTitle || `Experience ${index + 1}`}
              </span>

              <div className="flex items-center gap-2">
                {openIndex === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
                {cvDataExperience.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveExperience(index);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>

            {/* Content */}
            {openIndex === index && (
              <div className="p-4 space-y-3 bg-white">
                <div className="group relative">
                  <label className="text-xs text-gray-500 transition-colors duration-300 group-focus-within:text-purple-600">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={exp.jobTitle}
                    onChange={(e) =>
                      handleChange(index, "jobTitle", e.target.value)
                    }
                    className="border border-gray-400 w-full p-2 rounded text-sm outline-none"
                    placeholder="e.g. Software Engineer"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                </div>

                <div className="group relative">
                  <label className="text-xs text-gray-500 transition-colors duration-300 group-focus-within:text-purple-600">
                    Company
                  </label>
                  <input
                    type="text"
                    value={exp.companyName}
                    onChange={(e) =>
                      handleChange(index, "companyName", e.target.value)
                    }
                    className="border w-full p-2 rounded text-sm outline-none"
                    placeholder="e.g. Google"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                </div>

                <div className="flex gap-4 ">
                  <div className="flex-1 group relative">
                    <label className="text-xs text-gray-500 transition-colors duration-300 group-focus-within:text-purple-600">
                      Start Date
                    </label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) =>
                        handleChange(index, "startDate", e.target.value)
                      }
                      className="border w-full p-2 rounded text-sm outline-none"
                      placeholder="e.g. Jan 2020"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                  <div className="flex-1 group relative">
                    <label className="text-xs text-gray-500 transition-colors duration-300 group-focus-within:text-purple-600">
                      End Date
                    </label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) =>
                        handleChange(index, "endDate", e.target.value)
                      }
                      className="border w-full p-2 rounded text-sm outline-none"
                      placeholder="e.g. Dec 2022 or Present"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                </div>

                <div className="group relative">
                  <label className="text-xs text-gray-500 transition-colors duration-300 group-focus-within:text-purple-600">
                    Description
                  </label>
                  {/* <textarea
                    value={exp.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    className="border w-full p-2 rounded text-sm outline-none"
                    placeholder="Describe your role and achievements..."
                  /> */}
                  <ReactQuill
                    theme="snow"
                    value={exp.description}
                    onChange={(e) => handleChange(index, "description", e)}
                    placeholder="Describe your role and achievements..."
                    className="border w-full p-2 rounded text-sm outline-none"
                    modules={{
                      toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link"],
                        ["clean"],
                      ],
                    }}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add Experience */}
        <button
          type="button"
          onClick={handleAddExperience}
          className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition"
        >
          <Plus size={18} /> Add Experience
        </button>
      </div>

      {/* Sticky footer */}

      <div className="sticky bottom-0 bg-white p-6">
        {/* Progress bar */}
        <div className="flex gap-2 mb-4 py-6">
          <div className="flex-1 border-2 border-gray-200"></div>
          <div className="flex-1 border-2 border-purple-600"></div>
          <div className="flex-1 border-2 border-gray-200"></div>
          <div className="flex-1 border-2 border-gray-200"></div>
          <div className="flex-1 border-2 border-gray-200"></div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            className="px-20 py-2 rounded bg-gray-300"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
          <button
            className="px-24 py-2 rounded border-2 border-purple-600 bg-purple-600 hover:bg-white hover:text-purple-600 text-white"
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
