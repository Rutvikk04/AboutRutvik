import React from "react";
import HTML5 from "../Assets/HTML5.png"
import css3 from "../Assets/Css 3.png"
import JavaScript from "../Assets/jslogo.png"
import reactLogo from "../Assets/React.png"
import node from "../Assets/Node js.png"
import mongodb from "../Assets/mongodb.png"
import tailwind from  "../Assets/Tailwind.jpg"
import git from "../Assets/git.png"
const Skills = () => {
  const myskills=[
    {title:"HTML5",img:HTML5},
    {title:"CSS3",img:css3},
    {title:"JavaScript",img:JavaScript},
    {title:"React JS",img:reactLogo},
    {title:"Node JS",img:node},
    {title:"MongoDB",img:mongodb},
    {title:"TailwindCSS",img:tailwind},
    {title:"Git & Github",img:git},
  ]
  return (

      <div className="h-full w-full bg-gradient-to-b from-gray-900 to-black py-10">
        {/* Skill logos */}
        <h1 className="text-xl font-medium text-sky-600  text-center ">Key Skills</h1>
        <h1 className="text-2xl font-medium text-gray-300 text-center">
          This Is My Playground....
        </h1>
        <div className=" mt-4 w-fit text-white  max-md:flex-wrap max-sm:space-y-3 mx-auto flex flex-wrap items-center justify-around">
            {
              myskills.map((x,index)=>{
                return (
                  <div key={index} className=" hover:scale-105 transition-transform text-center cursor-pointer mx-3 ">
                  <img
                  className="w-20 h-20  rounded-full mx-auto object-center"
                  alt="skill_logo"
                  src={x.img}
                />
                <span className="text-lg text-gray-300 font-medium ">{x.title}</span>
                </div>
                )
              })
            }
            </div>
      </div>
  );
};

export default Skills;