import React from "react";
import Lottie from "lottie-react"
import boyAnimation from "../Assets/BoyReadingBook.json"
import { useRef } from "react";
const About = () => {
  const phoneRef=useRef()
  return (
    <div id="About" className=" bg-gradient-to-b pb-5 from-black to-gray-900 md:px-20 ">
      <h1 className="text-xl font-medium text-sky-600  text-center ">About</h1>
      <h1 className="text-2xl font-medium  text-gray-300 text-center max-sm:text-xl">
        Who am i?
      </h1>
      <div class="loader-line"></div>
      <div className=" max-w-[1440px] mx-auto flex max-md:flex-col justify-around items-center rounded-md">
        <p className="text-gray-200 w-[80%] max-md:w-full max-md:order-1 max-md:mt-2 p-2">
          Hello there, I Am Rutvik Amarcholi working as a <b>Sr.MERN Stack Developer</b> with <b>1.5 years</b> of experience.I
          completed Many company Projects As well as freelance projects through
          out my journey as mentioned in projects section.
          <br />
          <br />
          I am very flexible and always Ready to learn new thing and languages. I
          also tried Blender software and other animation softwares. Also I am fast-learner and can easily addopt new Environment.
          <br />
          <br />
          I am very puctual, gentle, Hard-working, kind, enthusiastic, And
          friendly person.
          <br />
          <br />
          My hobbies are reading books, playing games,travelling, research and
          music.
        </p>
        <div className="myphoto max-md:m-auto w-[60%] max-md:w-[90%]">
          {/* <img className="h-96 max-md:rounded-full" src={boyPNG} /> */}
          <Lottie lottieRef={phoneRef} loop={true} animationData={boyAnimation}/>
        </div>
      </div>
    </div>
  );
};

export default About;
