import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  // GPS
} from "feather-icons-react/build/IconComponents";
import fiverr from "../Assets/fiverr.png";
import pph from "../Assets/PPH.png";
import upwork from "../Assets/upwork.png"
const Footer = () => {
  return (
    <div className="bg-black border-t text-white flex max-sm:flex-col flex-wrap items-center justify-around p-5">
      {/* <div className="w-1/4 max-md:full">
        <h1 className="text-2xl text-sky-500 font-pacifico ">Rutvik</h1>
        <p>
          This Portfolio site is complete made by me. All the given information
          are real and verified by me.{" "}
        </p>
      </div> */}
      <div>
        <h1 className="text-lg text-center font-semibold text-sky-500"> Details</h1>
        <div>
          {/* <GPS/> */}
          <span>Surat,Gujarat,India</span>
        </div>
        <a
          href={"mailto:r.amarcholi@gmail.com"}
          className=" rounded-full text-white hover:text-sky-500 duration-200 cursor-pointer p-1"
        >
          {/* <Email/> */}
          <span>r.amarcholi@gmail.com</span>
        </a>
        <div>
          {/* <Phone/> */}
          <span>+919974608736</span>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold text-sky-500">Social Links</h1>
        <div className="flex  justify-around">
          {" "}
          <a
            href="https://github.com/Rutvikk04"
            target="_blank"
            className="text-white hover:shadow-md rounded-full hover:shadow-sky-500 cursor-pointer p-1"
          >
            <Github className="max-sm:h-5 max-sm:w-5 " />
          </a>
          <a
            href="https://www.linkedin.com/in/rutvik-amarcholi-4462981a3"
            target="_blank"
            className=" text-white hover:shadow-md rounded-full hover:shadow-sky-500 cursor-pointer p-1"
          >
            <Linkedin className="max-sm:h-5 max-sm:w-5 " />
          </a>
          <a
            href={"mailto:r.amarcholi@gmail.com"}
            className="hover:shadow-md rounded-full text-white hover:shadow-sky-500 cursor-pointer p-1"
          >
            <Mail className="max-sm:h-5 max-sm:w-5 " />
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold text-sky-500">
          Hire Me as freelancer!
        </h1>
        <div className="flex justify-around items-center text-center">
          <a href="https://www.fiverr.com/rutvikp04?public_mode=true"
            target="_blank"
          className="hover:scale-105 hover:text-sky-500 duration-200 font-medium">
            <img
              className="rounded-full h-10 w-10"
              src={fiverr}
              alt="fiverr "
            />
            <h1>fiverr</h1>
          </a>
          <a href="https://www.peopleperhour.com/hourlie/create-a-webapp-using-react-js-node-js-and-mongodb/917909"
            target="_blank"
           className="hover:scale-105 hover:text-sky-500 duration-200 font-medium">
            <img
              className="rounded-full h-10 w-10"
              src={pph}
              alt="People per hour"
            />
            <h1>PPH</h1>
          </a>
          <a href="https://www.upwork.com/freelancers/~013144f3ed2e15f1c4"
          target="_blank" 
          className="hover:scale-105 hover:text-sky-500 duration-200 font-medium ">
            <img
              className="rounded-full h-10 w-10 mx-auto"
              src={upwork}
              alt="People per hour"
            />
            <h1>Upwork</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
