import React, { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "feather-icons-react/build/IconComponents";
import { motion, useInView } from "framer-motion";
const SocialMedia = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      style={{
        transform: isInView ? "none" : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 1.1s cubic-bezier(.1,.5,.7,1) 1.5s '
        // transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={ref} className="flex z-50 flex-col max-md:absolute  space-y-4  justify-center px-5 max-sm:px-1">
      <a href="https://github.com/Rutvikk04" target="_blank" className="text-white hover:shadow-md rounded-full hover:shadow-sky-500 cursor-pointer p-1">
        <Github className="max-sm:h-4 max-sm:w-4 " />
      </a>
      <a href="https://www.linkedin.com/in/rutvik-amarcholi-4462981a3" target="_blank" className=" text-white hover:shadow-md rounded-full hover:shadow-sky-500 cursor-pointer p-1">
        <Linkedin className="max-sm:h-4 max-sm:w-4 " />
      </a>
      <a href={'mailto:r.amarcholi@gmail.com'} className="hover:shadow-md rounded-full text-white hover:shadow-sky-500 cursor-pointer p-1">
        <Mail className="max-sm:h-4 max-sm:w-4 " />
      </a>
    </motion.div>
  );
};

export default SocialMedia;
