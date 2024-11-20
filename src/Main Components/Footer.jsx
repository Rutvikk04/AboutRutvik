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
  const services = ["HTML5","CSS3","MERN stack", "Next JS", 'TailwindCSS', "Python"]
  return (
    <footer className=" bg-gradient-to-br from-black via-blue-800 to-black border-t text-white max-sm:p-2 p-5">
      <section className=" z-50 border-b-2 max-sm:space-y-5 w-fit mx-auto max-sm:mx-3 flex max-sm:flex-col  space-x-20 max-sm:space-x-0 max-sm:place-content-start place-content-center">
        <div className="w-auto ">
          <h1 className="text-lg text-center max-sm:text-start font-semibold text-sky-500">Social Links</h1>
          <div className="flex space-x-5 max-sm:space-x-3 justify-around max-sm:justify-start">
            {" "}
            <a
              href="https://github.com/Rutvikk04"
              target="_blank"
              className="text-black hover:scale-105 bg-white hover:shadow-md rounded-full  cursor-pointer p-1"
            >
              <Github className="max-sm:h-5 max-sm:w-5 h-8 w-8 " />
            </a>
            <a
              href="https://www.linkedin.com/in/rutvik-amarcholi-4462981a3"
              target="_blank"
              className=" text-white hover:scale-105 bg-blue-600 hover:shadow-md rounded-full cursor-pointer p-1"
            >
              <Linkedin className="max-sm:h-5 max-sm:w-5 h-8 w-8 " />
            </a>
            <a
              href={"mailto:r.amarcholi@gmail.com"}
              className="hover:shadow-md hover:scale-105 rounded-full text-red-500 bg-white cursor-pointer p-1"
            >
              <Mail className=" max-sm:h-5 max-sm:w-5 h-8 w-8 " />
            </a>
          </div>
        </div>
        <div className="w-auto ">
          <h1 className="text-lg text-center font-semibold text-sky-500">
            Hire Me as freelancer!
          </h1>
          <div className="flex justify-around max-sm:justify-start max-sm:space-x-3 items-center text-center">
            <a href="https://www.fiverr.com/rutvikp04?public_mode=true"
              target="_blank"
              className="hover:scale-105  hover:text-sky-500 duration-200 font-medium">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src={fiverr}
                alt="fiverr "
              />
              <h1>fiverr</h1>
            </a>
            <a href="https://www.peopleperhour.com/hourlie/create-a-webapp-using-react-js-node-js-and-mongodb/917909"
              target="_blank"
              className="hover:scale-105 hover:text-sky-500 duration-200 font-medium">
              <img
                className="rounded-full  object-cover h-10 w-10"
                src={pph}
                alt="People per hour"
              />
              <h1>PPH</h1>
            </a>
            <a href="https://www.upwork.com/freelancers/~013144f3ed2e15f1c4"
              target="_blank"
              className="hover:scale-105 hover:text-sky-500 duration-200 font-medium ">
              <img
                className="rounded-full  object-cover h-10 w-10 mx-auto"
                src={upwork}
                alt="People per hour"
              />
              <h1>Upwork</h1>
            </a>
          </div>
        </div>
      </section>
      <section className="grid max-w-[1440px] mx-auto grid-cols-4 max-sm:grid-cols-2 p-5 text-left">
        <div>
          <h1 className="text-2xl text-sky-500 font-pacifico ">Rutvik</h1>
          <p className="w-44 max-sm:w-36"><b>MERN Stack Developer</b> with <b className="underline">1.6 years</b> of experience..</p>
        </div>
        <div className="max-sm:mb-4">
          <h1 className="text-lg  font-semibold text-sky-500">Browse</h1>
          <ul className="flex flex-col">

            {
              menuItems.map((item, index) => (
                <a href={`${item}`} className="font-medium w-fit hover:scale-105 duration-200 hover:text-blue-400" key={index}>{item}</a>
              ))
            }
          </ul>
        </div>
        <div>
          <h1 className="text-lg  font-semibold text-sky-500">Services</h1>
          <ul className="flex flex-col">

            {
              services.map((item, index) => (
                <h1 className="font-medium duration-200 " key={index}>{item}</h1>
              ))
            }
          </ul>
        </div>
        <div>
          <h1 className="text-lg  font-semibold text-sky-500">Contact Me</h1>
          <section className="space-y-2 max-sm:space-y-4">
            
          <div className="flex items-center max-sm:items-start"><MapPin className="mr-2 w-5 h-5"/>Surat, Gujarat, India</div>
          <div className="flex items-center"><Mail className="mr-2 w-5 h-5"/>r.amarcholi@gmail.com</div>
          <div className="flex items-center"><Smartphone className="mr-2 w-5 h-5"/>+91 9974608736</div>
          </section>
        </div>
      </section>
      <section className="text-center border-t py-2 font-bold text-sm">
      © Rutvik Amarcholi 2023-24
      </section>
    </footer>
  );
};

export default Footer;
