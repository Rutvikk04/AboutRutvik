import React from "react";
import HTML5 from "../Assets/HTML5.png"
import css3 from "../Assets/Css 3.png"
import JavaScript from "../Assets/jslogo.png"
import reactLogo from "../Assets/React.png"
import node from "../Assets/Node js.png"
import mongodb from "../Assets/mongodb.png"
import tailwind from  "../Assets/Tailwind.jpg"
import git from "../Assets/git.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

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

      <div className="h-full w-full  bg-gradient-to-b from-gray-900 to-black py-10">
        {/* Skill logos */}
        <h1 className="text-xl font-medium text-sky-600  text-center ">Key Skills</h1>
        <h1 className="text-2xl font-medium text-gray-300 text-center max-sm:text-xl">
          This Is My Playground....
        </h1>
        <div className="loader-line"></div>
        {/* <div className=" mt-4 w-fit text-white  max-md:flex-wrap max-sm:space-y-3 mx-auto flex flex-wrap items-center justify-around max-md:grid max-md:grid-cols-4 max-sm:grid-cols-3"> */}
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      className="max-w-[1440px]  lg:translate-x-20  my-2"
      slidesPerView={10}
      breakpoints={
        {
          200:{
            slidesPerView:2,
            scrollbar:false
          },
          800:{
            slidesPerView:5
          },
          1000:{
            slidesPerView:9
          }
        }
      }
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
            {
              myskills.map((x,index)=>{
                return (
                  <SwiperSlide key={index} className=" hover:scale-105 transition-transform text-center cursor-pointer ">
                  <img
                  className="w-20 h-20 max-sm:w-28 max-sm:h-28  rounded-full mx-auto object-center"
                  alt="skill_logo"
                  src={x.img}
                />
                <span className="text-lg text-gray-300 font-medium ">{x.title}</span>
                </SwiperSlide>
                )
              })
            }
      </Swiper>
            </div>
      // </div>
  );
};

export default Skills;
