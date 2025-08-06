"use client";
import React, { useState } from "react";
import pdfToText from "react-pdftotext";
// Import the correct library and method for Google Generative AI
import { GoogleGenerativeAI } from "@google/generative-ai";

export const AnalyzeResume = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [aiContent, setAiContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle resume file selection and text extraction
  const extractResumeText = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const extractedText = await pdfToText(file);
        setResumeText(extractedText);
      } catch (error) {
        console.error("Failed to extract text from PDF:", error);
        setResumeText("Error extracting text from PDF.");
      }
    } else {
      setResumeText("No file selected.");
    }
  };

  // Function to generate AI content
  const generateAIContent = async () => {
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
      Analyze the following resume and job description. Provide an ATS score, identify missing keywords, and suggest improvements for the resume to better match the job description.
      
      Please format the output as follows:
      - Start with a welcome message like "Welcome to Hire-Orbit Resume Analyzer, [Name]!".We are here to help you optimize your resume for better job matching., using the name extracted from the resume.
      - Use headings like "ATS Score:", "Missing Keywords:", and "Improvements:" and list items without asterisks.
      - List missing keywords separated by commas and improvements as bullet points without asterisks.
      - Do not use Markdown or any special characters like asterisks for formatting.
      - Keep Improvements short in length.
      
      Job Description:
      ${jobDescription}
      
      Resume:
      ${resumeText}
      
      Note: If possible, extract the user's name from the resume to personalize the welcome message.
      `;
      
      const response = await model.generateContent(prompt);

      console.log("API Response:", response);

      const responseData = response.response || {};

      if (responseData && responseData.candidates && responseData.candidates.length > 0) {
        const analysisText = responseData.candidates[0]?.content?.parts?.[0]?.text || "No analysis generated.";
        console.log("Analysis Text:", analysisText);
        setAiContent(analysisText);
      } else {
        setAiContent("No valid response received.");
      }
    } catch (error) {
      console.error("Failed to generate content:", error);
      setAiContent("Error generating content.");
    }
    setLoading(false);
  };

  return (
    <div className="pt-4 font-sans ">
      <header className="w-full mx-auto dark:bg-white bg-black/80 shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600  mb-6">Hire-Orbit Resume Analyzer</h1>
        <div className="mb-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={extractResumeText}
            className="block w-full text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-white"
          />
        </div>
        <div className="mb-6">
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={8}
            className="w-full p-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter Job Description here..."
          />
        </div>
        <div className="text-center">
          <button
            onClick={generateAIContent}
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg text-white text-xl font-semibold ${
              loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            } transition duration-300`}
          >
            {loading ? "Analyzing..." : "Start Analysis"}
          </button>
        </div>
        {aiContent && (
          <div className="mt-8 p-6 border border-gray-300 rounded-lg bg-gray-50">
            <div
              className="font-sans whitespace-pre-wrap break-words text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatAnalysisText(aiContent) }}
            />
          </div>
        )}
      </header>
    </div>
  );
};

// Helper function to format the analysis text
const formatAnalysisText = (text) => {
    return text
      .replace(/## /g, '<h2 class="text-2xl font-bold ">')
      .replace(/ATS Score:([^\n]*)\n/g, '<h4 class="text-xl font-bold inline">ATS Score: <span class="font-light text-lg" > $1<span/></h4>')
      .replace(/Missing Keywords:([^\n]*)\n/g, '<h4 class="text-xl font-semibold inline ">Missing Keywords:<span class="font-light text-lg" > $1<span/></h4>')
      .replace(/Improvements:([^\n]*)\n/g, '<h4 class="text-xl font-bold ">Improvements:</h4>')
      .replace(/• /g, '<li class="list-disc ml-5">')
      .replace(/ - /g, '<li class="list-disc ml-5">')
      .replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />')
      .replace(/<\/li><br \/>\n/g, '</li><br /><br />')
      .replace(/<\/li>$/, '</li>')
      .replace(/<\/strong>\s*<\/li>/g, '</strong></li>');
  };