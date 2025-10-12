import React, { useState } from "react";
import { CVDataSkills } from "../../cv-maker/page";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  cvDataSkills: CVDataSkills[];
  setCvDataSkills: React.Dispatch<React.SetStateAction<CVDataSkills[]>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const SkillsInfo: React.FC<Props> = ({
  cvDataSkills,
  setCvDataSkills,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAddSkills = () => {
    setCvDataSkills([
      ...cvDataSkills,
      {
        field: "",
        skill: "",
      },
    ]);
    setOpenIndex(cvDataSkills.length);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...cvDataSkills];
    (updated[index] as any)[field] = value;
    setCvDataSkills(updated);
  };

  const handleRemoveSkills = (index: number) => {
    const updated = cvDataSkills.filter((_, i) => i !== index);
    setCvDataSkills(updated);
    if (openIndex === index) setOpenIndex(null);
  };

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-2xl rounded-sm">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-10 space-y-6 text-black">
        <h2 className="text-xl font-semibold text-purple-600">Skills</h2>

        {cvDataSkills.map((skill, index) => (
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
                {skill.field || `Skills ${index + 1}`}
              </span>

              <div className="flex items-center gap-2">
                {openIndex === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
                {cvDataSkills.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveSkills(index);
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
                    Field
                  </label>
                  <input
                    type="text"
                    value={skill.field}
                    onChange={(e) =>
                      handleChange(index, "field", e.target.value)
                    }
                    className="border border-gray-400 w-full p-2 rounded text-sm outline-none"
                    placeholder="e.g. Software Engineer"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                </div>

                <div className="group relative">
                  <label className="text-xs text-gray-500 transition-colors duration-300 group-focus-within:text-purple-600">
                    Skill
                  </label>
                  <input
                    type="text"
                    value={skill.skill}
                    onChange={(e) =>
                      handleChange(index, "skill", e.target.value)
                    }
                    className="border w-full p-2 rounded text-sm outline-none"
                    placeholder="e.g. Google"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add Skills */}
        <button
          type="button"
          onClick={handleAddSkills}
          className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition"
        >
          <Plus size={18} /> Add Skills
        </button>
      </div>

      {/* Sticky footer */}

      <div className="sticky bottom-0 bg-white p-6">
        {/* Progress bar */}
        <div className="flex gap-2 mb-4 py-6">
          <div className="flex-1 border-2 border-gray-200"></div>
          <div className="flex-1 border-2 border-gray-200"></div>
          <div className="flex-1 border-2 border-gray-200"></div>
          <div className="flex-1 border-2 border-purple-600"></div>
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

export default SkillsInfo;
