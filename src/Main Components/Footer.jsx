import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  // GPS
} from "feather-icons-react/build/IconComponents";
import fiverr from "../Assets/fiverr.png";
import pph from "../Assets/PPH.png";
import upwork from "../Assets/upwork.png"
const Footer = () => {
  const menuItems = ["Home", "Projects", "Experience", "About", "Contact"];
  const services = ["HTML5", "CSS3", "MERN stack", "Next JS", 'TailwindCSS', "Python"]
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Brand Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold neon-glow hover-glow text-accentCyan mb-2">
            Rutvik<span className="text-white">Amarcholi</span>
          </h2>
          <p className="text-sm text-gray-500">MERN Stack/ Next.js Developer</p>
        </div>
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Rutvikk04" target="_blank" className="social-media-img text-white  rounded-full hover:shadow-sky-500 cursor-pointer p-1">
            <Github className="max-sm:h-4 max-sm:w-4 " />
          </a>
          <a href="https://www.linkedin.com/in/rutvik-amarcholi-4462981a3" target="_blank" className="social-media-img  text-white  rounded-full hover:shadow-sky-500 cursor-pointer p-1">
            <Linkedin className="max-sm:h-4 max-sm:w-4 " />
          </a>
          <a href={'mailto:r.amarcholi@gmail.com'} className="social-media-img  rounded-full text-white hover:shadow-sky-500 cursor-pointer p-1">
            <Mail className="max-sm:h-4 max-sm:w-4 " />
          </a>
          <a href="https://www.fiverr.com/rutvikp04?public_mode=true"
            target="_blank"
            className="hover:scale-105  hover:text-sky-500 duration-200 font-medium">
            <img
              className="rounded-full  object-cover h-8 w-8 max-sm:h-6 max-sm:w-6 "
              src={fiverr}
              alt="fiverr "
            />
          </a>
          <a href="https://www.peopleperhour.com/hourlie/create-a-webapp-using-react-js-node-js-and-mongodb/917909"
            target="_blank"
            className="hover:scale-105 hover:text-sky-500 duration-200 font-medium">
            <img
              className="rounded-full  object-cover h-8 w-8 max-sm:h-6 max-sm:w-6"
              src={pph}
              alt="People per hour"
            />
          </a> <a href="https://www.upwork.com/freelancers/~013144f3ed2e15f1c4"
            target="_blank"
            className="hover:scale-105 hover:text-sky-500 duration-200 font-medium ">
            <img
              className="rounded-full  object-cover h-8 w-8 max-sm:h-6 max-sm:w-6  mx-auto"
              src={upwork}
              alt="People per hour"
            />
          </a>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {
            menuItems.map((item, index) => (
              <a
                href={`#${item}`}
                key={index}
                className="text-gray-400 hover:text-blue-500 hover:underline transition-colors duration-300"
              >
                {item}
              </a>

            ))
          }
        </div>
        {/* Copyright */}
        <div className="text-center text-xs text-gray-600 pt-4 border-t border-gray-800">
          <p>© 2023 Rutvik Amarcholi. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
