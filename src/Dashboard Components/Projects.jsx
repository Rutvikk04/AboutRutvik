import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import easyPDF from "../Assets/Project Images/EasyPDF.png"
import MineSweeperGame from "../Assets/Project Images/StakeGame.png"
import chatApp from "../Assets/Project Images/chatApp.png"
import portfolio from "../Assets/Project Images/portfolio.png"
import shopeasy from "../Assets/Project Images/shopeasy.png"
import bmi from "../Assets/Project Images/bmi_calculator.png"
const Projects = () => {
  const myProjects = [
    {
      title: "ShopEasy.AI",
      organization: "Webzeel pvt.ltd",
      image:shopeasy,
      frameworks: ["MERN stack", "TailwindCSS", "MUI"],
      thirdParty: ["Open AI", "Razorpay", "ShipRocket", "Axios"],
      description: `<p>
    ShopEasy.ai is an ai based e-commerce platform where user can make it's own
    store and can easily maintain it using admin panel. <br>
    Also the store is AI based so user can generate their content like blog, product description and
    such things using AI.          
    
  </p>`,
      link: "http://ShopEasy.AI",
    },
    {
      title: "MineSweeper Game",
      image:MineSweeperGame ,
      organization: "Personal Project",
      frameworks: ["React JS",  "TailwindCSS"],
      thirdParty: [],
      description: `<p>
  MineSweeper is a game , Completely made with React+TailwindCSS. It is a clone of Stake diamond game.
  It is my first game.Enjoy!!       
    
  </p>`,
      link: "https://rutvikk04.github.io/minesweeper_game/",
    },
    {
      title: "Easy PDF",
      image:easyPDF,
      organization: "Personal Project",
      frameworks: ["React JS",  "TailwindCSS"],
      thirdParty: [],
      description: `<p>
This is the tool where one can create and download PDF online . We provide you a Text editor. Fill data and generate and get your pdf in seconds.  
    
  </p>`,
      link: "https://rutvikk04.github.io/Easy-PDF/",
    },
    {
      title: "Live ChatApp",
      image:chatApp,
      organization: "Personal Project",
      frameworks: ["Node JS", "React JS", "ExpressJS", "MongoDB"],
      thirdParty: ["Socket.io"],
      description: `<p>
     It's live chat app with One to One personal As well as group chat features.User can login and enjoy the chat application..
  </p>`,
      link: "not_live",
    },
    {
      title: "BMI calculator",
      organization: "Personal Project",
      image:bmi,
      frameworks: ["JavaScript", "HTML", "CSS"],
      thirdParty: [],
      description: `<p>
    BMI calculator is used to measure your body Mass index by using your height and wight.This calculator calculate and give infromation about you are underweight or overwight.          
    <br></br>
    
  </p>`,
      link: "https://rutvikk04.github.io/BMI-Calculator-With-HTML-CSS-and-JavaScript/",
    },
    {
      title: "My Portfolio",
      image:portfolio,
      organization: "Personal Project",
      frameworks: ["React JS", "TailwindCSS"],
      thirdParty: [],
      description: `<p>
    This is about my portfolio where you can explore about me, my skills,my achivemets And lot of.<br/><br/>Frankly, This is the Site where you are already reading this stuff.
  </p>`,
      link: "Rutvik Portfolio",
    },
  ];

  return (
    <div
      id="Projects"
      className="h-full py-16 space-y-4 w-full bg-gradient-to-b from-black to-gray-900 py- px-5"
    >
      <div>
        <h1 className="text-xl font-medium text-sky-600  text-center ">
          Projects
        </h1>
        <h1 className="text-2xl font-medium text-gray-300 text-center max-sm:text-xl mb-2">
          Witness my Creativity And skills here...
        </h1>
        <div class="loader-line"></div>
      </div>
      <div className="flex max-w-[1440px] m-auto justify-around flex-wrap max-md:space-y-2">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className=" px-3 py-5 w-full h-full"
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {myProjects?.map((x, index) => {
            let { description } = x;
            return (
              <div
                key={index}
                className="w-[300px] h-[420px] mb-3 bg-transparent cursor-pointer group perspective"
              >
                <SwiperSlide
                  key={index}
                  className=" transition-transform cursor-pointer"
                >
                  <div className="w-[300px] h-[420px] mb-3 bg-transparent cursor-pointer group md:perspective">
                    <div className="relative md:group-hover:my-rotate w-full h-full duration-1000 md:preserve-3d">
                      <div className="absolute overflow-y-auto shadow-lg shadow-sky-600 p-3 rounded-md backface-hidden bg-gradient-to-b from-blue-950 to-black text-white  w-full h-full">
                        <a
                          href={x.link}
                          className="font-semibold text-sky-500 text-2xl text-left underline "
                        >
                     <img src={x.image} className="h-44 w-full border border-blue-400 rounded-sm"/>
                          {x.title}
                        </a>
                        <div
                          className="lg:line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                        <h1 className="font-bold text-sky-400 mt-2">
                          Language & Frameworks:
                        </h1>
                
                          {x.frameworks.map((y, index) => {
                            return <span>{y} , </span>;
                          })}
                       
                        {x.thirdParty?.length ? (
                          <>
                            {" "}
                            <h1 className="font-bold text-sky-400 mt-2">
                              3rd Party Integrations:
                            </h1>
                              {x.thirdParty.map((z, index) => {
                                return <span>{z}, </span>;
                              })}
                            
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="absolute shadow-lg shadow-sky-600 c1 rounded-md p-2 backface-hidden my-rotate w-full h-full bg-gradient-to-b  from-blue-950 to-black">
                        <div
                          className="text-white mb-2"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                        {x.link === "not_live" ? (
                          <button
                            className="btn-secondary  text-sm"
                            onClick={() =>
                              window.alert("Not live yet, live Soon...")
                            }
                          >
                            {x.title}
                          </button>
                        ) : (
                          <a
                            href={x.link}
                            target="_blank"
                            className="btn-secondary  text-sm"
                          >
                            {x.title}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>

        {/* {myProjects?.map((x, index) => {
            let{description}=x
            return (
              <div key={index} className="w-[300px] h-[420px] mb-3 bg-transparent cursor-pointer group perspective">
                <div className="relative group-hover:my-rotate w-full h-full duration-1000 preserve-3d">
                  <div className="absolute shadow-md shadow-sky-600 p-3 rounded-md backface-hidden bg-gradient-to-b from-gray-700 to-gray-900 text-white border border-sky-300 w-full h-full">
                    <h1 className="font-bold text-sky-500 text-2xl text-center underline">
                      {x.title}
                    </h1>
                    <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: description }} />
                    <h1 className="font-bold text-sky-400 mt-2">
                      Language & Frameworks:
                    </h1>
                    <ul className="ml-2">
                      {x.frameworks.map((y, index) => {
                        return <li>{y}</li>;
                      })}
                    </ul>
                    {
                      x.thirdParty?.length ?
                      <> <h1 className="font-bold text-sky-400 mt-2">
                      3rd Party Integrations:
                    </h1>
                    <ul className="ml-2">
                    {x.thirdParty.map((z, index) => {
                        return <li>{z}</li>;
                      })}
                    </ul>
                      </>:<></>
                   
                    }
                  </div>
                  <div className="absolute shadow-md shadow-sky-600 c1 rounded-md p-2 backface-hidden my-rotate w-full h-full bg-gradient-to-b border border-sky-300  from-gray-700 to-gray-900">
                  <div className="text-white mb-2" dangerouslySetInnerHTML={{ __html: description }} />
                    <a href={x.link} target="_blank" className="btn-secondary  text-sm">
                      {x.title}
                    </a>
                  </div>
                </div>
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default Projects;
