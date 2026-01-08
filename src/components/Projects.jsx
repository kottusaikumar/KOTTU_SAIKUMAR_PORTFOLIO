import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';
import Project1Image from '../assets/project1.png';

const projects = [
  {
    id: 1,
    title: "Full Stack Project– TradePro Trading Dashboard",
    description: "Designed and developed a real-time, configurable trading analytics dashboard to analyze local market datasets using multi-pane interactive charts, technical indicators, and Excel-driven feature configuration. Integrated Plotly.js for synchronized price, volume, and indicator charts with zoom/pan coordination and detailed tooltips for better analysis. Built a Flask-based backend to process CSV and RAR datasets, perform OHLC transformations, and compute technical indicators such as VWAP, EMA, and RSI. Implemented a responsive, theme-aware UI with dark/light mode, collapsible sidebar, and symbol search to enhance user experience. Improved application performance using time-based resampling, API response caching, lazy loading, and debounced user interactions to efficiently handle large datasets.image: ",
    image: Project1Image,
    link: "https://github.com/kottusaikumar/Tradepro-Dashboard"
  },
  {
    id: 2,
    title: "Weapon Detection and Identification using Image Recognition",
    description: "Developed a web-based weapon detection application using Streamlit, enabling real-time image classification through uploaded JPG/PNG images. Implemented an automated data collection pipeline using the Bing Image Downloader to search and download weapon images for model training. Integrated a VGG19 pre-trained CNN model to achieve high-accuracy image recognition for weapon detection.Built the backend using Python, and trained models using TensorFlow and Keras for efficient prediction and inference.Gained hands-on experience in deep learning, computer vision, web application development, and automated dataset generation.",
    image: Project1Image,
    link: "https://github.com/kottusaikumar/weapons-Detection-identification-using-Image-Recognition"
  },
  {
    id: 3,
    title: "Instagram Analytics and Engagement Optimization",
    description: "Performed exploratory data analysis (EDA) on 1,000+ Instagram posts to identify key factors influencing user engagement using statistical analysis and correlation techniques. Built interactive Tableau dashboards with 10+ visualizations to track KPIs such as reach, impressions, engagement rate, and optimal posting times. Generated actionable insights that contributed to a 20% improvement in engagement metrics by analyzing content type, posting schedule, and hashtag effectiveness. Applied feature engineering to create derived metrics like engagement rate and viral coefficient, and conducted time-series analysis to identify trends and seasonal patterns.Presented insights through data storytelling, creating clear reports suitable for both technical and non-technical stakeholders.",
    image: Project1Image,
    link: "https://github.com/kottusaikumar/Unveiling-Patterns-Instagram-Data-Exploration"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
