import pdfplumber
import re
import json
from google import genai
from pydantic import BaseModel
import os
from dotenv import load_dotenv



# ---------- TEXT EXTRACTION ----------
def extract_text_from_pdf(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text


# ---------- PREPROCESSING ----------
def normalize_whitespace(text):
    text = re.sub(r'\n\s*\n+', '\n', text)
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()


def format_sections(text):
    section_headers = [
        "Education", "Experience", "Work Experience", "Professional Experience",
        "Skills", "Technical Skills", "Projects", "Certifications", "Languages",
        "Contact", "Profile", "Summary", "Achievements", "Publications"
    ]
    for header in section_headers:
        pattern = rf"(?<!\n){header}:?"
        text = re.sub(pattern, f"\n\n{header}:", text, flags=re.IGNORECASE)
    return text


def remove_noise(text):
    text = re.sub(r"Page\s*\d+\s*(of\s*\d+)?", "", text, flags=re.IGNORECASE)
    text = re.sub(r"©.*?\n", "", text)
    text = re.sub(r"https?://\S+", "", text)
    return text.strip()


def clean_sentences(text):
    lines = [line.strip() for line in text.split("\n") if line.strip()]
    processed = []
    for line in lines:
        if not line.endswith(('.', '!', '?')):
            line += '.'
        processed.append(line)
    return "\n".join(processed)


def preprocess_resume_text(raw_text):
    text = normalize_whitespace(raw_text)
    text = format_sections(text)
    text = remove_noise(text)
    text = clean_sentences(text)
    return text


# ---------- GEMINI STRUCTURED PARSING ----------

class CVDataPersonal(BaseModel):
    firstName: str
    lastName: str
    email: str
    phone: str
    jobTitle: str
    address: str
    city: str
    country: str
    linkedIn: str
    github: str


class CVDataExperience(BaseModel):
    companyName: str
    jobTitle: str
    startDate: str
    endDate: str
    description: str


class CVDataEducation(BaseModel):
    school: str
    degree: str
    startDate: str
    endDate: str
    cgpa: str
    description: str


class CVDataSkills(BaseModel):
    field: str
    skill: str


class CVDataProjects(BaseModel):
    projectName: str
    tools: str
    description: str


class CVResponse(BaseModel):
    personal: CVDataPersonal | None
    experience: list[CVDataExperience] | None
    education: list[CVDataEducation] | None
    skills: list[CVDataSkills] | None
    projects: list[CVDataProjects] | None


# ---------- MAIN LOGIC ----------

def process_resume(pdf_path, output_json="resume_data.json"):
    # Step 1: Extract and clean text
    raw_text = extract_text_from_pdf(pdf_path)
    clean_text = preprocess_resume_text(raw_text)


    # Step 2: Send to Gemini for structured parsing
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=f"Extract structured resume information from this text:\n\n{clean_text}",
        config={
            "response_mime_type": "application/json",
            "response_schema": CVResponse,
        },
    )

    # Step 3: Save as JSON
    with open(output_json, "w", encoding="utf-8") as f:
        f.write(response.text)

    print(f"✅ Resume data saved to {output_json}")
    return response.text


# ---------- RUN ----------
if __name__ == "__main__":
    process_resume("resume.pdf")
