import React from "react";
import Resume from "../Assets/Documents/Resume.pdf";
import myPhoto from "../Assets/myphoto.jpg";
import SocialMedia from "./SocialMedia";
const Header = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-black to-gray-900 h-screen py-4 ">
      {/* INfo And Buttons Div */}
      <SocialMedia />
      <div className="infoDIv flex flex-col justify-around h-full ">
        <div className="flex flex-col items-center text-center justify-between h-20 overflow-hidden">
          <div className="text-4xl space-y-4 pt-4 text-center text-white   animate-text-scroll">
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
          <h1 className="text-6xl max-md:text-5xl text-center text-white">
            I Am Rutvik..
          </h1>
          <h1 className="text-xl max-md:text-xl text-center text-blue-400">
            MERN Stack Developer
          </h1>
        </div>

        <p className="mx-auto max-md:px-4 md:w-1/2 text-center text-md font-semibold text-gray-400 max-sm:flex-nowrap max-sm:line-clamp-6">
          I Am Self Learned,Passionate Coder withover{" "}
          <span className="text-white">1 years</span> of Experience.I Completed Many
          Freelance Project As Well As Company Project with Good Response And
          Desired Output.If you Are Seeking For A Good{" "}
          <span className="text-white">MERN Developer</span> Than Your Search Is over
          Now...
        </p>
        <div className="flex justify-center space-x-5 my-3">
          <a
            href={Resume}
            download="Rutvik_MERN_Resume"
            className="hero-btn"
          >
            Download CV
          </a>
          <a
            className=" hero-btn cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Image And Social Media DIv */}
      <div className="group max-md:hidden max-lg:hidden w-1/2 flex flex-col h-full justify-center items-left ">
        <img
          src={myPhoto}
          className=" relative  z-40  w-64 h-auto object-fill rounded-lg shadow-2xl shadow-white hover:shadow-blue-500 duration-300 ease-linear  "
        />
          <div className="max-md:hidden absolute z-20  lg:w-64 h-[28rem]  rotate-12 bg-gray-200 group-hover:bg-blue-500 group-hover:shadow-blue-400 opacity-50 shadow-md shadow-white rounded-lg duration-300 ease-linear">
          <div className="max-md:hidden lg:w-64 h-[28rem] z-10 rotate-6 bg-gray-500 group-hover:bg-blue-200 group-hover:shadow-blue-400group-hover:bg-blue-200 group-hover:shadow-blue-400 opacity-75 shadow-md shadow-white rounded-lg duration-300 ease-linear"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
