import React from "react";
import myphoto from "../Assets/myphoto.jpg";
const About = () => {
  return (
    <div id="About" className="bg-gradient-to-b from-black to-gray-900 ">
      <h1 className="text-xl font-medium text-sky-600  text-center ">About</h1>
      <h1 className="text-2xl font-medium  text-gray-300 text-center max-sm:text-xl">
        Who am i?
      </h1>
      <div class="loader-line"></div>
      <div className=" max-w-[1440px] mx-auto flex max-md:flex-col justify-around rounded-md">
        <p className="text-gray-200 w-[70%] max-md:w-full max-md:order-1 max-md:mt-2 p-2">
          Hello there, I Am Rutvik Amarcholi working as a <b>Sr.MERN Stack Developer</b> with <b>1 year</b> of experience.I
          completed Many company Projects As well as freelance projects through
          out my journey as mentioned in projects section.
          <br />
          <br />I am <b>self-taught programmer</b> and took 2 months to learn
          React Js And Node js.Python And React Native Are my future Interests
          and will cover it Soon.Also I use VS code As my IDE and flexible to
          work with another IDEs.
          <br />
          <br />
          I am very flexible and always Ready to learn new thing and languages.I
          also tried Blender software and other animation softwares.Also I am fast-learner and can easily addopt new Environment.
          <br />
          <br />
          I am very puctual, gentle, Hard-working, kind, enthusiastic, And
          friendly person.
          <br />
          <br />
          My hobbies are reading books, playing games,travelling, research and
          music.
        </p>
        <div className="myphoto max-md:m-auto ">
          <img className="h-96 max-md:rounded-full" src={myphoto} />
        </div>
      </div>
    </div>
  );
};

export default About;
