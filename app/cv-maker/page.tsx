"use client";

import React, { useState } from "react";
import PersonalInfo from "../_components/cvFormComponents/personalInfo";
import CVPreview from "../_components/cvPreview";
import ExperienceInfo from "../_components/cvFormComponents/experienceInfo";
import EducationInfo from "../_components/cvFormComponents/educationInfo";
import SkillsInfo from "../_components/cvFormComponents/skillsInfo";
import ProjectsInfo from "../_components/cvFormComponents/projectsInfo";
import Sidebar from "../_components/sidebar";
export interface CVDataPersonal {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  address: string;
  city: string;
  country: string;
  linkedIn: string;
  github: string;
}

export interface CVDataExperience {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface CVDataEducation {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  cgpa: string;
  description: string;
}

export interface CVDataSkills {
  field: string;
  skill: string;
}

export interface CVDataProjects {
  projectName: string;
  tools: string;
  description: string;
}

const CvBuilderPage = () => {
  const [step, setStep] = useState<number>(1);

  const [cvDataPersonal, setCvDataPersonal] = useState<CVDataPersonal>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    address: "",
    city: "",
    country: "",
    linkedIn: "",
    github: "",
  });

  const [cvDataExperience, setCvDataExperience] = useState<CVDataExperience[]>([
    {
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [cvDataEducation, setCvDataEducation] = useState<CVDataEducation[]>([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      cgpa: "",
      description: "",
    },
  ]);

  const [cvDataSkills, setCvDataSkills] = useState<CVDataSkills[]>([
    {
      field: "",
      skill: "",
    },
  ]);

  const [cvDataProjects, setCvDataProjects] = useState<CVDataProjects[]>([
    {
      projectName: "",
      tools: "",
      description: "",
    },
  ]);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 grid grid-cols-12 gap-6 bg-gray-100">
        {/* Left: Form */}
        {step === 1 && (
          <div className="col-span-12 md:col-span-6">
            <PersonalInfo
              cvDataPersonal={cvDataPersonal}
              setCvDataPersonal={setCvDataPersonal}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          </div>
        )}
        {step === 2 && (
          <div className="col-span-12 md:col-span-6">
            <ExperienceInfo
              cvDataExperience={cvDataExperience}
              setCvDataExperience={setCvDataExperience}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          </div>
        )}
        {step === 3 && (
          <div className="col-span-12 md:col-span-6">
            <EducationInfo
              cvDataEducation={cvDataEducation}
              setCvDataEducation={setCvDataEducation}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          </div>
        )}
        {step === 4 && (
          <div className="col-span-12 md:col-span-6">
            <SkillsInfo
              cvDataSkills={cvDataSkills}
              setCvDataSkills={setCvDataSkills}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          </div>
        )}

        {step === 5 && (
          <div className="col-span-12 md:col-span-6">
            <ProjectsInfo
              cvDataProjects={cvDataProjects}
              setCvDataProjects={setCvDataProjects}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          </div>
        )}

        {/* Right: CV Preview (hidden on small screens) */}
        <div className="hidden md:block md:col-span-6">
          <CVPreview
            CVDataPersonal={cvDataPersonal}
            CVDataExperience={cvDataExperience}
            CVDataEducation={cvDataEducation}
            CVDataSkills={cvDataSkills}
          />
        </div>
      </div>
    </div>
  );
};

export default CvBuilderPage;
