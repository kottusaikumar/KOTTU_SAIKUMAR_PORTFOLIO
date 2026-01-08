import React from 'react';
import { motion } from 'framer-motion';
import AboutMeSvg from '../assets/about-me.svg';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src={AboutMeSvg} alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a passionate Full-Stack AI Developer with a strong foundation in Python, Machine Learning, and AI Engineer. I enjoy combining data-driven intelligence with clean, user-friendly interfaces to build impactful and scalable applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My journey began during my engineering studies, where I developed a deep interest in Data Science and Artificial Intelligence. Since then, I’ve continuously expanded my skills by working on real-world projects involving Machine Learning, Deep Learning, NLP, and full-stack development using React and Python-based backends.
        </p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I enjoy exploring AI research trends, experimenting with ML models, and building practical projects that solve real-world problems. I actively share and maintain my work on GitHub and continuously learn from the evolving tech ecosystem.
        </p>
      </motion.div>
    </div>
  );
}
