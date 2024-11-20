import React, { useState } from "react";
import { ArrowRight } from "feather-icons-react/build/IconComponents";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
const Experience = () => {
  const [hoverDiv, setHoverDiv] = useState()
  const myexp = [
    {
      org_name: "Webzeel pvt.ltd",
      date: "01 April 2023 to Present",
      Role: "Sr.MERN Stack Developer",
      team: 8,
      responsibilities: [
        "Optimization and Development of WebApp",
        "Assign Task To juniors And Guide Them",
        "Train New Joinees",
        "Conduct Interviews For New Joinees",
        "R&D on New Features And Project Development",
      ],
    },
    {
      org_name: "Nucleus Lab pvt.ltd",
      date: "01 Novermber 2022 to 30 March 2023",
      Role: "Trainee MERN Stack Developer",
      team: 5,
      responsibilities: [
        "Learn Advance JS",
        "Learn React JS",
        "Get Training On Node JS",
        "Covered MongoDB and Express JS",
      ],
    },
  ];
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  //give spring like animation
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

  // function for locate where out cursor is
  const handleMouseMove = (e) => {
    // get properties of selected div and calculations
    const rect = e.target.getBoundingClientRect(); //to get to cursor data
    //get height and width of our rect/our main card
    const height = rect.height;
    const width = rect.width;
    //calculation to get mouse position on card as below:
    //formula is { mousePosition - left property of rect} same as Y
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    //convert this values in percentage
    const xpoint = mouseX / width - 0.5; //here 0.5 is for just make the calculation easy
    const ypoint = mouseY / height - 0.5;
    // now save xpoint and ypoint in useMotionValue hook from framer-motion library\
    x.set(xpoint);
    y.set(ypoint);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <div
      id="Experience"
      className="bg-gradient-to-b py-14 from-gray-900 to-black h-fit"
    >
      <h1 className="text-xl font-medium text-sky-600  text-center ">
        Experience
      </h1>
      <h1 className="text-2xl font-medium text-gray-300 text-center max-sm:text-xl mb-2">
        Pit-stops of my journey..
      </h1>
      <div class="loader-line"></div>
      <div className="m-auto md:space-x-5  max-w-[1440px] flex max-sm:flex-col  justify-between px-6 py-3">
        {myexp.map((x, index) => {
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
              key={index}
              className="relative max-md:mb-2 h-96 w-full rounded-xl bg-gradient-to-br border border-gray-600 from-gray-900 to-gray-600"
            >
              <div
                style={{
                  transform: "translateZ(75px)",
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 p-2 grid place-content-center rounded-xl bg-gray-900 shadow-blue-500 shadow-lg"
              >
                <h1 className="text-center text-sky-500 text-2xl">
                  {x.org_name}
                </h1>
                <h1 className="text-center text-gray-400 text-sm mb-2">
                  {x.date}
                </h1>
                <div className="flex flex-nowrap justify-between max-md:flex-col">
                  <h1 className="text-sky-600 font-medium">
                    Role:{" "}
                    <span className=" text-gray-200 whitespace-nowrap">
                      {x.Role}
                    </span>
                  </h1>
                  <h1 className="text-sky-600 font-medium">
                    Team Size: <span className=" text-gray-200">{x.team}</span>
                  </h1>
                </div>
                <h1 className="text-sky-600 font-medium mt-2">
                  Key-Responsibilities:
                </h1>

                <ul className="ml-3 text-gray-300">
                  {x.responsibilities.map((y, index) => {
                    return (
                      <div className="flex space-x-2">
                        <ArrowRight className="w-4" />
                        <li>{y}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
