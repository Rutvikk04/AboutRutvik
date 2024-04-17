import React, { useState } from "react";
import HTML5 from "../Assets/HTML5.png";
import css3 from "../Assets/Css 3.png";
import JavaScript from "../Assets/jslogo.png";
import reactLogo from "../Assets/React.png";
import node from "../Assets/Node js.png";
import mongodb from "../Assets/mongodb.png";
import tailwind from "../Assets/Tailwind.jpg";
import git from "../Assets/git.png";
import NextJs from "../Assets/NextJS.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Skills = () => {
  const [hoverDiv, setHoverDiv] = useState()
  const myskills = [
    { title: "HTML5", img: HTML5 },
    { title: "CSS3", img: css3 },
    { title: "JavaScript", img: JavaScript },
    { title: "React JS", img: reactLogo },
    { title: "Next JS", img: NextJs },
    { title: "Node JS", img: node },
    { title: "MongoDB", img: mongodb },
    { title: "TailwindCSS", img: tailwind },
    { title: "Git & Github", img: git },
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
    <div className="h-full w-full  bg-gradient-to-b from-gray-900 to-black">
      {/* Skill logos */}
      <h1 className="text-xl font-medium text-sky-600  text-center ">
        Key Skills
      </h1>
      <h1 className="text-2xl font-medium  text-gray-300 text-center max-sm:text-xl mb-2">
        This Is My Playground....
      </h1>
      <div className="loader-line"></div>
      <div className="m-auto md:space-x-5  max-w-[1440px]  max-sm:flex-col  justify-between px-6">
        {/* <div className=" mt-4 w-fit text-white  max-md:flex-wrap max-sm:space-y-3 mx-auto flex flex-wrap items-center justify-around max-md:grid max-md:grid-cols-4 max-sm:grid-cols-3"> */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="px-3 py-5 w-full"
          breakpoints={{
            200: {
              slidesPerView: 2,
              scrollbar: false
            },
            500: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 5,
            },

            1200: {
              slidesPerView: 8,
              scrollbar: true
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {myskills.map((x, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" transition-transform text-center cursor-pointer "
              >
                <motion.div

                  onMouseEnter={() => setHoverDiv(index)}
                  onMouseMove={(e) => { if (hoverDiv === index) handleMouseMove(e) }}
                  onMouseLeave={(e) => { if (hoverDiv === index) handleMouseLeave(e) }}
                  style={hoverDiv === index && {
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative h-36 lg:shadow-md shadow-blue-500 w-36 grid place-content-center rounded-full lg:bg-gray-800  "
                >
                  <div
                    style={{
                      transform: "translateZ(75px)",
                    }}
                    className="lg:preserve-3d  group "
                  >
                    <img
                      className="shadow-lg  group-hover:shadow-blue-500 preserve-3d w-20 h-20 max-sm:w-28 max-sm:h-28  rounded-full mx-auto object-center"
                      alt="skill_logo"
                      src={x.img}
                    />
                    <span className="text-lg group-hover:text-xl group-hover:text-blue-500 text-gray-300 font-medium ">
                      {x.title}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
