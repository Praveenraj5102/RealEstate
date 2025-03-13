import React from "react";
import { assets } from "../assets/assets";
import "./About.css";
import { motion } from "motion/react"
const About = () => {
  return (
    <motion.div className="about-container " 
    initial={{opacity:0,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      viewport={{infinity:true}}
    id="About">
      <h1 className="about ">
        About <span>Our Brand</span>
      </h1>
      <p className="para">Passionate About Properties, Dedicated to Your Vision</p>
      <div className=" brand-image ">
        <img
          src={assets.brand_image}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
        <div className="content-container ">
          <div className=" content  2xl:pr-30">
            <div>
              <p className=" numbers ">10+</p>
              <p >Years of Excellence</p>
            </div>
            <div>
              <p className=" numbers ">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className=" numbers ">20+</p>
              <p>Min. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className=" numbers ">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className=" content-para my-10 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ipsum
            atque! Illum explicabo aliquam laborum incidunt, quod nemo inventore
            sed unde praesentium eveniet fugit, reiciendis perspiciatis quam,
            atque repellendus expedita?
          </p>
          <button className="learn-more py-8">Learn more</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
