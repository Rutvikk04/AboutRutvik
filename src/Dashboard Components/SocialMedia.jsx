import React from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "feather-icons-react/build/IconComponents";
const SocialMedia = () => {
  return (
    <div className="flex flex-col max-md:absolute  space-y-4  justify-center px-5 max-sm:px-1">
      <a href="https://github.com/Rutvikk04"  target="_blank" className="text-white hover:shadow-md rounded-full hover:shadow-white cursor-pointer p-1">
        <Github className="max-sm:h-4 max-sm:w-4 "/>
      </a>
      <a href="https://www.linkedin.com/in/rutvik-amarcholi-4462981a3" target="_blank" className=" text-white hover:shadow-md rounded-full hover:shadow-white cursor-pointer p-1">
      <Linkedin className="max-sm:h-4 max-sm:w-4 "/>
      </a>
      <a href={'mailto:r.amarcholi@gmail.com'} className="hover:shadow-md rounded-full text-white hover:shadow-white cursor-pointer p-1">
      <Mail className="max-sm:h-4 max-sm:w-4 "/>
      </a> 
    </div>
  );
};

export default SocialMedia;
