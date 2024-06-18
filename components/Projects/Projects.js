// Projects.js
'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import "./Projects.css";

const projects = [
  {
    num: "01",
    category: "PinkBlue",
    title: "project 1",
    description:
      "A complete mental wellness app that allows users to improve their mental health through various tools and resources along with a user-friendly design and evidence-based practices. Also has the blogs section where users can share their stories and motivate others.",
    stack: [{ name: "ReactJs" }, { name: "FireBase" }],
    image: "/pinkblue.png",
    live: "https://pinkblue.netlify.app/",
    github: "https://github.com/poojagusain101/pinkblue",
  },
  {
    num: "02",
    category: "SowEasy (Crop Recommender)",
    title: "project 2",
    description:"Experimented with various Machine Learning models, such as Decision Trees and Naive Bayes, to evaluate and compare their accuracy in predicting the most suitable crops for planting, leading to a 13% boost in crop productivity. Performed pre-processing steps, explored analysis methods and deployed the project using Streamlit .",
    stack: [{ name: "Machine Learning" }, { name: "Streamlit" }, { name: "Jupyter Notebook" }],
    image: "/soweasy.png",
    live: "https://soweasy.streamlit.app/",
    github: "https://github.com/poojagusain101/SowEasy_Crop-Recommender",
  },
  {
    num: "03",
    category: "MindMatters",
    title: "project 3",
    description:
      "A mental health blog app where users can share their stories, publish their ideas online and read the blog of others. Built the frontend using ReactJS and used Firebase for authentication and database.",
    stack: [{ name: "ReactJs" }, { name: "Firebase" }],
    image: "/mindmatters.png",
    live: "https://speakyourmind-aaf31.web.app/",
    github: "https://github.com/poojagusain101/mindmatters",
  },
  {
    num: "04",
    category: "Suicidal Text Classification",
    title: "project 4",
    description:
      "Built a suicidal ideation classifier to determine if a text is likely to include suicidal thoughts or not. Visualized the data and classified the output as suicidal or non-suicidal. Applied various NLP techniques, preprocessed the data, and compared the accuracy of different machine learning algorithms.",
    stack: [{ name: "Machine Learning" }, { name: "NLP" }, { name: "Jupyter Notebook" }],
    image: "/suicide.png",
    live: "https://github.com/poojagusain101/suicidal-text-classification/blob/main/suicidal_text_classification.ipynb",
    github: "https://github.com/poojagusain101/suicidal-text-classification",
  },
  {
    num: "05",
    category: "Dishlicious",
    title: "project 5",
    description:"Made using HTML , CSS , JavaScript and mealDB API. Has a user-friendly interface where users can search for their favorite dishes and view the list of ingredients and recipe",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/dishlicious.png",
    live: "https://dishlicious.netlify.app/",
    github: "https://github.com/poojagusain101/dishlicious",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const project = projects[currentIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="projects-section"
      id="projects"
    >
      <div className="project-heading"><h1>Projects</h1></div>
      <div className="container2">
        <div className="projects-wrapper">
          <div className="project-details">
            <div className="project-number">{project.num}</div>
            <h2 className="project-title">
              {project.category}
            </h2>
            <p className="project-description">{project.description}</p>
            <ul className="project-stack">
              {project.stack.map((item, index) => (
                <li key={index} className="stack-item">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <hr/>
            <div className="project-links">
              <div className="link-outer">
              <Link href={project.live}>
                <BsArrowUpRight className="link-icon" />
              </Link>
              </div>
              <div className="link-outer">
              <Link href={project.github}>
                <BsGithub className="link-icon" />
              </Link>
              </div>
            </div>
          </div>

          <div className="project-slider">
            <div className="slider">
             
              <div className="slider-image-wrapper">
                <Image
                  src={project.image}
                  fill
                  className="slider-image"
                  alt="image here"
                />
              </div>
              <div className="sliderBtns">
              <button onClick={handlePrevSlide} className="slider-button"><PiCaretLeftBold/></button>
              <button onClick={handleNextSlide} className="slider-button"><PiCaretRightBold/></button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
