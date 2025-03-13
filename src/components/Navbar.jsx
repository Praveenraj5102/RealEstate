import React from 'react'
import {assets} from "../assets/assets"


const Navbar = () => {
  return (
    <div className=" container" >
        <div className='nav-container '>
            <img src={assets.logo} alt=""   />
            <ul  >
                <a href="#Header" >Home</a>
                <a href="#About" >About</a>
                <a href="#Projects" >Project</a>
                <a href="#Testimonials" >Testimonials</a>
            </ul>
            <button className='bg-white  border border-gray-500'>Contact Us</button>
           
        </div>
    </div>
  )
}

export default Navbar