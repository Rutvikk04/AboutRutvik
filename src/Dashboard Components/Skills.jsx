import React, { useEffect, useState } from "react";
import HTML5 from "../Assets/HTML5.png";
import css3 from "../Assets/Css 3.png";
import JavaScript from "../Assets/jslogo.png";
import reactLogo from "../Assets/React.png";
import node from "../Assets/Node js.png";
import mongodb from "../Assets/mongodb.png";
import tailwind from "../Assets/Tailwind.jpg";
import bootstrap from "../Assets/bootstrap.png";
import sql from "../Assets/sql.png";
import git from "../Assets/git.png";
import NextJs from "../Assets/NextJS.png";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Skills = () => {
  const [hoverDiv, setHoverDiv] = useState()
  const [skillFilter, setSkillfiler] = useState()
  const [currentActiveFilter, setCurrentActiveFilter] = useState("all")

  const myskills = [
    { title: "HTML5", img: HTML5, type: "fe" },
    { title: "CSS3", img: css3, type: "fe" },
    { title: "JavaScript", img: JavaScript, type: "both" },
    { title: "React JS", img: reactLogo, type: "fe" },
    { title: "Next JS", img: NextJs, type: "both" },
    { title: "Node JS", img: node, type: "be" },
    { title: "MongoDB", img: mongodb, type: "db" },
    { title: "MySQL", img: sql, type: "db" },
    { title: "TailwindCSS", img: tailwind, type: "fe" },
    { title: "Bootstrap", img: bootstrap, type: "fe" },
    { title: "Git & Github", img: git, type: "other" },
  ];

  useEffect(() => {
    setSkillfiler(myskills)
  }, [])
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.9, 0.9],
    ["22.5deg", "-22.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.9, 0.9],
    ["-22.5deg", "22.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const height = rect.height;
    const width = rect.width;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xpoint = mouseX / width - 0.5;
    const ypoint = mouseY / height - 0.5;
    x.set(xpoint);
    y.set(ypoint);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

const handleSKillFilter=(value)=>{
  if(value=="all"){
    setSkillfiler(myskills)
  }
  else{
    let filteredSKills = myskills.filter(x=>value==="fe" || value==="be" ? x.type==value || x.type =="both" :x.type==value)
    setSkillfiler(filteredSKills)
  }
  setCurrentActiveFilter(value)
}

  return (
    <div className="h-full w-full py-20 bg-gradient-to-b from-transparent to-black">
      <h4 className="text-2xl font-bold text-sky-600  text-center ">
        Key Skills
      </h4>
      <h5 className="text-lg  text-gray-300 text-center mb-2">
        This Is My Playground....
      </h5>

      <div className="m-auto md:space-x-5  max-w-[1440px]  max-sm:flex-col  justify-between px-6 max-sm:px-2">
      <div className=" text-white flex flex-wrap gap-4 justify-center w-full my-8">
        <button onClick={()=>handleSKillFilter("all")} className={`nav-link  hover:text-blue-600 px-1 py-2 text-sm font-medium ${currentActiveFilter=="all" ? "active text-blue-600" :"text-white"}`}>All</button>
        <button onClick={()=>handleSKillFilter("fe")} className={`nav-link  hover:text-blue-600 px-1 py-2 text-sm font-medium ${currentActiveFilter== "fe" ? "active text-blue-600" :"text-white"}`}>Front-end</button>
        <button onClick={()=>handleSKillFilter("be")} className={`nav-link  hover:text-blue-600 px-1 py-2 text-sm font-medium ${currentActiveFilter== "be" ? "active text-blue-600" :"text-white"}`}>Backend</button>
        <button onClick={()=>handleSKillFilter("db")} className={`nav-link  hover:text-blue-600 px-1 py-2 text-sm font-medium ${currentActiveFilter== "db" ? "active text-blue-600" :"text-white"}`}>Database</button>
        <button onClick={()=>handleSKillFilter("other")} className={`nav-link  hover:text-blue-600 px-1 py-2 text-sm font-medium ${currentActiveFilter== "other" ? "active text-blue-600" :"text-white"}`}>Others</button>
      </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {skillFilter?.map((x, index) => {
            return (
              <motion.div
                onMouseEnter={() => setHoverDiv(index)}
                onMouseMove={(e) => { if (hoverDiv === index) handleMouseMove(e) }}
                onMouseLeave={(e) => { if (hoverDiv === index) handleMouseLeave(e) }}
                style={hoverDiv === index && {
                  rotateY,
                  rotateX,
                  transformStyle: "preserve-3d",
                }}
                className="relative h-36 shadow-md group shadow-blue-500 w-36 max-sm:w-28 max-sm:h-28 grid place-content-center rounded-md bg-gray-800  "
              >
                <div
                  style={{
                    transform: "translateZ(75px)",
                  }}
                  className="lg:preserve-3d text-center  "
                >
                  <img
                    className="shadow-md shadow-white mb-2 object-cover group-hover:shadow-blue-500 preserve-3d w-20 h-20 max-sm:w-12 max-sm:h-12 rounded-full mx-auto object-center"
                    alt="skill_logo"
                    src={x.img}
                  />
                  <span className="text-md group-hover:text-blue-500 text-gray-300 font-medium ">
                    {x.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
