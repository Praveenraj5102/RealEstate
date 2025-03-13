import React from "react";
import Navbar from "./Navbar";
import "./header.css";
import "./Navbar.css";
import { motion } from "motion/react"
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="container-img min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"  id="Header">
      <Navbar />
      <motion.div
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{infinity:true}}
      className="welcome  ">
        <h2 className="header">Explore homes that fit your dreams</h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3">Projects</a>
          <a href="#Contact" className="bg-blue-600 border border-white px-8 py-3">Contact Us</a>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Header;
