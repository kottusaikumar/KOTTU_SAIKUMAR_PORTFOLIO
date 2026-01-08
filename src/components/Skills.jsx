import React, { useState } from "react";
import VajraLogo from "../assets/vajra_ai_circle_logo.svg";
import { FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { FileCode, Brain, Layout, TableProperties, Boxes, BarChart3, GitBranch, Github, Code2 } from "lucide-react";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={50} /> },
    { id: 2, name: "C++", icon: <FileCode size={50} /> },
    { id: 3, name: "SQL", icon: <FaDatabase size={50} /> },
    { id: 4, name: "Machine Learning", icon: <Brain size={50} /> },
    { id: 5, name: "Deep Learning", icon: <Brain size={50} /> },
    { id: 6, name: "NLP", icon: <Brain size={50} /> },
    { id: 7, name: "React", icon: <FaReact size={50} /> },
    { id: 8, name: "HTML5", icon: <FileCode size={50} /> },
    { id: 9, name: "CSS3", icon: <Layout size={50} /> },
    { id: 10, name: "TensorFlow", icon: <Brain size={50} /> },
    { id: 11, name: "Keras", icon: <Brain size={50} /> },
    { id: 12, name: "Pandas", icon: <TableProperties size={50} /> },
    { id: 13, name: "NumPy", icon: <Boxes size={50} /> },
    { id: 14, name: "Scikit-learn", icon: <Brain size={50} /> },
    { id: 15, name: "Tableau", icon: <BarChart3 size={50} /> },
    { id: 16, name: "Power BI", icon: <BarChart3 size={50} /> },
    { id: 17, name: "Docker", icon: <Boxes size={50} /> },
    { id: 18, name: "Git", icon: <GitBranch size={50} /> },
    { id: 19, name: "GitHub", icon: <Github size={50} /> },
    { id: 20, name: "VS Code", icon: <Code2 size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Vajra.ai",
      role: "Data Science Intern",
      period: "Nov 2024 - FED 2025",
      description:
        "Developed a full-stack AI chatbot application combining computer vision and NLP, including a VGG19-based CNN for food spoilage detection that achieved 94% accuracy, and an LSTM-based chatbot for customer service automation. Built a deep learning pipeline using transfer learning with VGG19, applied data augmentation and fine-tuning on a custom dataset of 5,000+ food images to improve model performance and generalization. Designed and implemented a scalable web application with a React.js frontend and Flask REST API backend, enabling real-time image classification and conversational AI features, and deployed TensorFlow models in a production-ready setup.Implemented an encoder–decoder LSTM model trained on 400+ question–answer pairs, enhancing chatbot responses and contextual understanding.",
      logo: VajraLogo,
    },
    {
      id: 2,
      company: "Vajra.ai",
      role: "Data Science Intern",
      period: "AUG 2024 - Oct 2024",
      description:
        "Built an end-to-end machine learning pipeline to predict drug effectiveness using Random Forest, trained on 2,000+ patient records, achieving an R² score of 0.81 and RMSE of 0.38. Cleaned and prepared data by handling missing values, outliers, categorical variables, and feature scaling, and applied cross-validation to ensure reliable model performance. Compared multiple regression models including Linear Regression, Ridge, Lasso, XGBoost, and Random Forest, and selected the best model based on performance metrics.Supported clinical analytics validation by contributing to reports and SOP documentation, following data science best practices.",
      logo: VajraLogo,
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <h2 className="text-2xl lg:text-4xl text-center">
          My <span className="font-extrabold">Skills</span>
        </h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-8 text-sm md:text-base font-bold mt-7 lg:mt-16 w-full place-items-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-2 md:p-3 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-32 lg:w-32 flex flex-col items-center justify-center gap-2 md:gap-3"
            >
              <div className="flex items-center justify-center">
                {React.cloneElement(skill.icon, { size: 30 })}
              </div>
              <p className="text-center text-xs md:text-sm leading-tight">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <h2 className="text-2xl lg:text-4xl text-center text-white">
          My <span className="font-extrabold">Experience</span>
        </h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}