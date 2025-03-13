import React, { useEffect, useState } from "react";
import "./Projects.css";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react"
const Projects = () => {

  const [currentIndex,setCurrentIndex]=useState(0)
  const [cardsShow,setCardsShow]=useState(projectsData.length)
  

  const nextProject=()=>{
    setCurrentIndex((preIndex)=>(preIndex+1)%projectsData.length)
  }
  const previousProject=()=>{
    setCurrentIndex((preIndex)=>preIndex === 0 ?projectsData.length-1: preIndex-1)
  }
  return (
    <motion.div className="projects" id="Projects"
    initial={{opacity:0,x:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,x:0}}
      viewport={{infinity:true}}>
      <h1 className="project-h1 ">
        Projects <span>Completed</span>
      </h1>
      <p className="project-para mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>

      <div className="buttons ">
        <button className="left-arrow " onClick={previousProject}>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className="right-arrow " onClick={nextProject}>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      <div className="main-container">
        <div className="project-container " style={{ transform: `translateX(-${(currentIndex * 100) / cardsShow}%)` }}>
          {projectsData.map((project, index) => (
            <div key={index} className="project-img  ">
              <img
                src={project.image}
                alt={project.title} 
              />
              <div className="project-data-container ">
                <div className="project-data shadow-md" >
                  <h2 >{project.title}</h2>
                  <p >
                    {project.price} <span> | </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
