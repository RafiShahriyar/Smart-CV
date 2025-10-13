import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CVDataPersonal } from "../cv-maker/page";
import { CVDataExperience } from "../cv-maker/page";
import { CVDataEducation } from "../cv-maker/page";
import { CVDataSkills } from "../cv-maker/page";

interface Props {
  CVDataPersonal: CVDataPersonal;
  CVDataExperience: CVDataExperience[];
  CVDataEducation: CVDataEducation[];
  CVDataSkills: CVDataSkills[];
}

const CVPreview: React.FC<Props> = ({
  CVDataPersonal,
  CVDataExperience,
  CVDataEducation,
  CVDataSkills,
}) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (!cvRef.current) return;

    const canvas = await html2canvas(cvRef.current, { scale: 5 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = (pdf as any).getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };

  return (
    <div className="border p-10 bg-white shadow-lg text-black">
      <div ref={cvRef}>
        {/* Personal Info */}
        <h1 className="text-2xl font-bold mb-3 ">
          {CVDataPersonal.firstName + " " + CVDataPersonal.lastName}
        </h1>

        <h1 className="text-xl font-semibold ">
          {CVDataPersonal.jobTitle} | {CVDataPersonal.linkedIn} |{" "}
          {CVDataPersonal.github}{" "}
        </h1>
        <p className="mb-5">
          {CVDataPersonal.address}, {CVDataPersonal.city},{" "}
          {CVDataPersonal.country} | {CVDataPersonal.email} |{" "}
          {CVDataPersonal.phone}{" "}
        </p>

        {/* Experience */}
        <div className="border w-full border-black"></div>
        <p className="font-semibold mt-1 mb-1">PROFESSIONAL EXPERIENCE</p>
        <div className="border w-full border-black"></div>
        {CVDataExperience.map((exp, idx) => (
          <div key={idx} className="mt-3">
            <div className="flex justify-between">
              <p className="font-bold  mb-2 text-md">
                {exp.jobTitle}, {exp.companyName}{" "}
              </p>
              <p className="font-bold  mb-2 text-md">
                {exp.startDate} - {exp.endDate}{" "}
              </p>
            </div>
            <div
              className="max-w-none text-sm ml-1"
              dangerouslySetInnerHTML={{
                __html: exp.description
                  .replace(/<ol>/g, "<ul style='margin:0; padding-left:1.2rem; list-style-type:disc;'>")
                  .replace(/<\/ol>/g, "</ul>"),
              }}
            />

          </div>
        ))}

        {/* Education */}
        <div className="border w-full border-black mt-4"></div>
        <p className="font-semibold mt-1 mb-1">Education</p>
        <div className="border w-full border-black"></div>
        {CVDataEducation.map((edu, idx) => (
          <div key={idx} className="mt-3">
            <div className="flex justify-between">
              <p className="font-bold  mb-1 text-md">{edu.degree} </p>
              <p className="font-bold  mb-1 text-md">
                {edu.startDate} - {edu.endDate}{" "}
              </p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-md font-semibold">{edu.school}</p>
              <p className="text-md font-semibold">{"CGPA: " + edu.cgpa}</p>
            </div>
            <div
              className="max-w-none text-sm ml-1"
              dangerouslySetInnerHTML={{
                __html: edu.description
                  .replace(/<ol>/g, "<ul style='margin:0; padding-left:1.2rem; list-style-type:disc;'>")
                  .replace(/<\/ol>/g, "</ul>"),
              }}
            />

          </div>
        ))}

        {/* Skills */}
        <div className="border w-full border-black mt-4"></div>
        <p className="font-semibold mt-1 mb-1">Skills</p>
        <div className="border w-full border-black"></div>
        {CVDataSkills.map((skill, idx) => (
          <div key={idx} className="mt-3">
            <div className="flex flex-row">
              <p className="text-md font-semibold">{skill.field + " - "}</p>
              <p className="text-md">{skill.skill} </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={exportPDF}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default CVPreview;
