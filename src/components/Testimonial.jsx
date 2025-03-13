import React from "react";
import "./Testimonial.css";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react"
const Testimonial = () => {
  return (
    <motion.div 
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{infinity:true}}
    className="testimonial" id="Testimonials">
      <div>
        <h1 className="testimonial-h1">
          Customer <span>Testimonials</span>
        </h1>
        <p className="testimonial-para">
          Real Stories from Those who Found Home with Us
        </p>
      </div>
      <div className="testimonial-container ">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card ">
            <img src={testimonial.image} alt={testimonial.alt} />
            <h2 className="cardName ">{testimonial.name} </h2>
            <p className="cardTitel">{testimonial.title} </p>
            <div className="cardRating">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="tCardPara">{testimonial.text} </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Testimonial;
