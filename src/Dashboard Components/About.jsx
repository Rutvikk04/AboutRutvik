import React from "react";
import Lottie from "lottie-react"
import boyAnimation from "../Assets/BoyReadingBook.json"
import { useRef } from "react";
const About = () => {
  const phoneRef = useRef()
  return (
    <div id="About" className=" bg-gradient-to-b pb-5 from-black to-gray-900 md:px-20 pt-16 ">
      <div className="relative w-fit mx-auto text-center z-10">
        <h4 className="glow-underline text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-2">
          About<span className="text-accentCyan"> Rutvik</span>
        </h4>
        <h5 className="text-sm md:text-base uppercase tracking-widest font-light mb-2 text-textMuted">
          Passion-driven. Purpose-built.
        </h5>
        {/* Decorative line */}
        <div className="w-36 mx-auto h-px bg-gradient-to-r from-accentCyan to-transparent mb-12" />
      </div>
      <div className=" max-w-[1440px] mx-auto flex max-md:flex-col justify-around items-center rounded-md">
        <p className="text-gray-200 w-[80%] max-md:w-full max-md:order-1 max-md:mt-2 p-2">
          Hey there — I’m <b>Rutvik Amarcholi</b>, a passionate <b> MERN Stack/ NextJS Developer</b> with <b>2.5+ years</b> of hands-on experience turning ideas into seamless digital products.
          <br /><br />
          From delivering robust company solutions to crafting pixel-perfect freelance projects, my journey has been a blend of code, creativity, and curiosity — all showcased in the Projects section.
          <br /><br />
          I'm a quick learner and tech explorer — recently diving into <b>Blender</b> and 3D animation tools just for fun. New frameworks, tools, or environments? <b className="text-accentCyan">Challenge accepted.</b>
          <br /><br />
          I value <b>punctuality, kindness, adaptability, and consistency</b>. Whether it’s pushing code or pushing boundaries, I bring a balance of logic and heart to every collaboration.
          <br /><br />
          When I’m not coding, you’ll find me lost in a book, gaming, traveling, researching the next big thing, or vibing to music — because life’s about balance.
        </p>

        <div className="myphoto max-md:m-auto w-[60%] max-md:w-[90%]">
          {/* <img className="h-96 max-md:rounded-full" src={boyPNG} /> */}
          <Lottie lottieRef={phoneRef} loop={true} animationData={boyAnimation} />
        </div>
      </div>
    </div>
  );
};

export default About;
