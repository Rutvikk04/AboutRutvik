import { useRef } from "react";
import Resume from "../Assets/Documents/Rutvik_MERN.pdf";
import SocialMedia from "./SocialMedia";
import { useInView } from "framer-motion";
import bgVideo from "../Assets/bg-video.mp4"
import { motion } from "framer-motion";
const Header = () => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div id="Home"
      className="flex  justify-center bg-video  z-20 h-screen py-4 ">
      <video autoPlay muted loop id="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* INfo And Buttons Div */}
      <div className="hidden md:flex align-middle">
        <SocialMedia className={`${isInView ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      <div className="infoDIv  flex flex-col justify-around h-full ">
        <div className="flex flex-col items-center text-center justify-between h-16 overflow-hidden">
          <div style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease"
          }} className="text-4xl space-y-5 pt-5 text-center text-white  animate-text-scroll">
            <h1>Hola...</h1>
            <h1>Hi..</h1>
            <h1>नमस्ते</h1>
            <h1>你好</h1>
            <h1>Bonjour...</h1>
            <h1>やあ..</h1>
            <h1>Hello...</h1>
            <h1>Hai...</h1>
            <h1>Hallo...</h1>
            <h1>أهلاً..</h1>
          </div>
        </div>
        <div>
          <h1 ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className="text-6xl font-pacifico header-hero max-md:text-5xl text-center text-sky-500">
            I Am Rutvik..
          </h1>
          <h1
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
            }}
            className="text-xl max-md:text-xl text-center text-gray-200">
            MERN Stack/Next JS Developer
          </h1>
        </div>

        <p
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(-50%)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
          }}
          className="mx-auto z-20 max-md:px-4 md:w-1/2 text-center text-md font-semibold text-gray-400  max-sm:flex-nowrap max-sm:line-clamp-6">
          With over <b className="text-white underline">2.5 years</b> of hands-on experience delivering high-impact projects—both freelance and professional—I'm a  <b className="text-white underline">MERN Stack/Next JS developer</b>  who turns ideas into scalable, efficient solutions.
          If you're looking for a developer who blends skill with dedication, your search ends here.
        </p>
        {/* <div className="flex justify-center space-x-5 my-3 max-md:mx-2 max-md:text-center">
          <a
            href={Resume}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(-50%)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "
            }}
            download="Rutvik_MERN_Resume"
            className="hero-btn"
          >
            Download CV
          </a>
          <a
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(50%)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "
            }}
            className=" hero-btn cursor-pointer"
            href="#Contact"
          >
            Contact Me
          </a>
        </div> */}
        <div className="flex justify-center space-x-5 my-3 max-md:mx-2 max-md:text-center">
          {/* Primary Button */}
          <a
            className="btn-primary"
            href={Resume}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(-50%)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "
            }}
            download="Rutvik_MERN_NextJS_Resume"
          >
            <span className="relative z-10">Download CV</span>
            <span className="absolute inset-0 bg-cyan-400 opacity-10 blur-md" />
          </a>
          {/* Secondary Button */}
          <a
            className="btn-secondary"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(50%)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "
            }}
            href="#Contact"
          >
            <span className="relative z-10">Contact ME</span>
            <span className="absolute inset-0 bg-cyan-300 opacity-10 blur-md" />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default Header;
