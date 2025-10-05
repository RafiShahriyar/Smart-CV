"use client"
import { useState } from "react";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    summary: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6 min-h-screen bg-gray-100">
      {/* Left: Form */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Resume Editor</h2>
        <form className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="summary"
            placeholder="Summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </form>
      </div>

      {/* Right: Live Preview */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold">{formData.name || "Your Name"}</h1>
        <h2 className="text-lg text-gray-600">{formData.jobTitle || "Job Title"}</h2>
        <hr className="my-2" />

        <h3 className="font-semibold">Summary</h3>
        <p>{formData.summary || "Write a short summary about yourself."}</p>

        <h3 className="font-semibold mt-3">Skills</h3>
        <ul className="list-disc ml-5">
          {(formData.skills ? formData.skills.split(",") : ["Skill 1", "Skill 2"]).map(
            (skill, i) => (
              <li key={i}>{skill.trim()}</li>
            )
          )}
        </ul>

        <h3 className="font-semibold mt-3">Experience</h3>
        <p>{formData.experience || "Add your work experience here."}</p>
      </div>
    </div>
  );
}
