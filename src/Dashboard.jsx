import React from "react";
import Header from "./Dashboard Components/Header";
import Skills from "./Dashboard Components/Skills";
import Projects from "./Dashboard Components/Projects";
import About from "./Dashboard Components/About";
import Experience from "./Dashboard Components/Experience";
import ContactME from "./Dashboard Components/ContactME";
const Dashboard = () => {
  return (
    <>
     <Header/>
     <Skills/>
     <Projects/>
     <Experience/>
     <About/>
   <ContactME/>
    </>
  );
};

export default Dashboard;
