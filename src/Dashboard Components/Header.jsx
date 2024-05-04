import React, { Fragment, useRef } from "react";
import Resume from "../Assets/Documents/Rutvik_MERN.pdf";
import myPhoto from "../Assets/myphoto.jpg";
import SocialMedia from "./SocialMedia";
import { useInView } from "framer-motion";
import CanvasModel from "../canvas";
const Header = () => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })
  return (
    <div id="Home" className="flex justify-between bg-gradient-to-b from-black to-gray-900 h-screen py-4 ">
      {/* INfo And Buttons Div */}
      <SocialMedia className={`${isInView ? 'opacity-0' : 'opacity-100'}`} />
      <div className="infoDIv lg:w-[75%] flex flex-col justify-around h-full ">
        <div className="flex flex-col items-center text-center justify-between h-16 overflow-hidden">
          <div style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease 1s"
          }} className="text-4xl space-y-5 pt-5 text-center text-white   animate-text-scroll">
            <h1>Hola...</h1>
            <h1>Hi..</h1>
            <h1>नमस्ते</h1>
            <h1>你好</h1>
            <h1>Bonjour...</h1>
            <h1>やあ..</h1>
            <h1>Hello...</h1>
            <h1>Hai...</h1>
            <h1>Hallo...</h1>
            <h1>أهلاً..</h1>
          </div>
        </div>
        <div>
          <h1 ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className="text-6xl font-pacifico  max-md:text-5xl text-center text-sky-500">
            I Am Rutvik..
          </h1>
          <h1
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
            }}
            className="text-xl max-md:text-xl text-center text-gray-200">
            MERN Stack Developer
          </h1>
        </div>

        <p
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(-50%)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
          }}
          className="mx-auto max-md:px-4 md:w-1/2 text-center text-md font-semibold text-gray-400 max-sm:flex-nowrap max-sm:line-clamp-6">
          I Am Self Learned,Passionate Coder withover{" "}
          <span className="text-white">1.5 years</span> of Experience.I Completed Many
          Freelance Project As Well As Company Project with Good Response And
          Desired Output.If you Are Seeking For A Good{" "}
          <span className="text-white">MERN Developer</span> Than Your Search Is over
          Now...
        </p>
        <div className="flex justify-center space-x-5 my-3 max-md:mx-2 max-md:text-center">
          <a
            href={Resume}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(-50%)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
            }}
            download="Rutvik_MERN_Resume"
            className="hero-btn"
          >
            Download CV
          </a>
          <a
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(50%)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
            }}
            className=" hero-btn cursor-pointer"
            href="#Contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Image And Social Media DIv */}
      <div className="group max-md:hidden max-lg:hidden w-1/2  flex flex-col h-full justify-center mt-20">
        {/* <img
          src={myPhoto}
          style={{
            transform: isInView ? "none" : "translateX(100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="myphoto  z-40  w-[22rem] h-auto object-fill rounded-full border border-sky-700 shadow-2xl shadow-sky-500 "
        /> */}
        <CanvasModel/>

      </div>
    </div>
  );
};

export default Header;
