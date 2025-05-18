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

  const handleSKillFilter = (value) => {
    if (value == "all") {
      setSkillfiler(myskills)
    }
    else {
      let filteredSKills = myskills.filter(x => value === "fe" || value === "be" ? x.type == value || x.type == "both" : x.type == value)
      setSkillfiler(filteredSKills)
    }
    setCurrentActiveFilter(value)
  }

  return (
    <div className="h-full w-full py-20 bg-gradient-to-b from-transparent to-black">
      <div className="relative w-fit mx-auto text-center z-10">
        <h4 className="glow-underline text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-2">
          Key <span className="text-accentCyan">Skills</span>
        </h4>
        <h5 className="text-sm md:text-base uppercase tracking-widest font-light mb-2 text-textMuted">
          This Is My Playground...
        </h5>
        {/* Decorative line */}
        <div className="w-36 mx-auto h-px bg-gradient-to-r from-accentCyan to-transparent mb-12" />
      </div>

      <div className="m-auto md:space-x-5  max-w-[1440px]  max-sm:flex-col  justify-between px-6 max-sm:px-2">
        <div className=" text-white flex flex-wrap gap-4 justify-center w-full my-8">
          <button onClick={() => handleSKillFilter("all")} className={`nav-link  hover:text-accentCyan px-1 py-2 text-sm font-medium ${currentActiveFilter == "all" ? "active text-accentCyan" : "text-gray-400"}`}>All</button>
          <button onClick={() => handleSKillFilter("fe")} className={`nav-link  hover:text-accentCyan px-1 py-2 text-sm font-medium ${currentActiveFilter == "fe" ? "active text-accentCyan" : "text-gray-400"}`}>Frontend</button>
          <button onClick={() => handleSKillFilter("be")} className={`nav-link  hover:text-accentCyan px-1 py-2 text-sm font-medium ${currentActiveFilter == "be" ? "active text-accentCyan" : "text-gray-400"}`}>Backend</button>
          <button onClick={() => handleSKillFilter("db")} className={`nav-link  hover:text-accentCyan px-1 py-2 text-sm font-medium ${currentActiveFilter == "db" ? "active text-accentCyan" : "text-gray-400"}`}>Database</button>
          <button onClick={() => handleSKillFilter("other")} className={`nav-link  hover:text-accentCyan px-1 py-2 text-sm font-medium ${currentActiveFilter == "other" ? "active text-accentCyan" : "text-gray-400"}`}>Others</button>
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
                className="relative h-36 shadow-sm group shadow-accentCyan w-36 max-sm:w-28 max-sm:h-28 grid place-content-center rounded-md bg-bg "
              >
                <div
                  style={{
                    transform: "translateZ(75px)",
                  }}
                  className="lg:preserve-3d text-center  "
                >
                  <img
                    className="shadow-md shadow-white mb-2 object-cover group-hover:shadow-accentCyan preserve-3d w-20 h-20 max-sm:w-12 max-sm:h-12 rounded-full mx-auto object-center"
                    alt="skill_logo"
                    src={x.img}
                  />
                  <span className="text-md group-hover:text-accentCyan text-gray-300 font-medium ">
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
