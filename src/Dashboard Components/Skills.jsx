import React from "react";
import HTML5 from "../Assets/HTML5.png"
import css3 from "../Assets/Css 3.png"
import JavaScript from "../Assets/jslogo.png"
import reactLogo from "../Assets/React.png"
import node from "../Assets/Node js.png"
import mongodb from "../Assets/mongodb.png"
import tailwind from  "../Assets/Tailwind.jpg"
const Skills = () => {
  return (

      <div className="h-full w-full bg-gradient-to-b from-gray-900 to-black py-10">
      {/* bg-gradient-to-b from-gray-900 to-black */}
        {/* Skill logos */}
        <h1 className="text-xl font-medium text-sky-600  text-center ">Key Skills</h1>
        <h1 className="text-2xl font-medium text-gray-300 text-center">
          This Is My Playground....
        </h1>
        <div className=" mt-4 w-fit text-white  max-md:flex-wrap max-sm:space-y-3 mx-auto space-x-8 flex items-center justify-around">
          <div className="w-fit h-fit flex flex-col hover:scale-105 transition-transform duration- rotate cursor-pointer ">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="html_logo"
              src={HTML5}
            />
            <span className="text-lg text-center font-medium">HTML 5</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer ">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={css3}
            />
            <span className="text-lg text-center font-medium">CSS 3</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={JavaScript}
            />
            <span className="text-lg text-center font-medium">JavaScript</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={reactLogo}
            />
            <span className="text-lg text-center font-medium">React Js</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={node}
            />
            <span className="text-lg text-center font-medium">Node Js</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={mongodb}
            />
            <span className="text-lg text-center font-medium">MongoDB</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={tailwind}
            />
            <span className="text-lg text-center font-medium whitespace-nowrap">Tailwind CSS</span>
          </div>
          <div className="w-fit h-fit flex flex-col  hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              className="w-20 h-20 rounded-full mx-auto object-cover"
              alt="css3_logo"
              src={tailwind}
            />
            <span className="text-lg text-center font-medium">Git & Github</span>
          </div>
        </div>
      </div>
  );
};

export default Skills;
