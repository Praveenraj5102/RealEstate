import React from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import { motion } from "motion/react"
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "97475507-989c-45c2-a5a9-fcdc492cb9d4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form submited Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("");
        toast.error(data.message)
      }
    }
  return (
    <motion.div
    initial={{opacity:0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 mt-4 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build your Future Together.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name :
            <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2" />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4"> 
            Your Email :
            <input type="email" name="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2"/>
          </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea name="message" placeholder="Enter Your Message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"></textarea>
        </div>
        <div>
            <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result ? result: "Send Message"} </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
