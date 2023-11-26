import React from "react";
const Projects = () => {
  const myProjects = [
    {
      title: "ShopEasy.AI",
      organization: "Webzeel pvt.ltd",
      frameworks: ["React JS", "Node JS", "TailwindCSS", "MUI"],
      thirdParty: ["Open AI", "Razorpay", "ShipRocket", "Axios", "Redux Thunk"],
      description: `<p>
    ShopEasy.ai is an ai based e-commerce platform where user can make it's own
    store and can easily maintain it using admin panel.           
    
    This project has 3 modules:<br></br>
    <b>1.Super-Admin</b>: Super-Admin is operated by team shopEasy to Handle
    Admins(store Owners) and Users(customers)
    <br />
    <b>2.Admin</b>: Admin panel for admin to maintain and customize their
    store .<br />
    <b>3.User</b>: E-commerce WebApp of admins where customers Can buy Admin
    services & thier goods.
  </p>`,
      link: "ShopEasy.AI",
    },
    {
      title: "BMI calculator",
      organization: "Personal Project",
      frameworks: ["JavaScript", "HTML", "CSS"],
      thirdParty: [],
      description: `<p>
    BMI calculator is used to measure your body Mass index by using your height and wight.This calculator calculate and give infromation about you are underweight or overwight.          
    <br></br>
    
  </p>`,
      link: "BMI Calculator",
    },
    {
      title: "My Portfolio",
      organization: "Personal Project",
      frameworks: ["React JS", "TailwindCSS"],
      thirdParty: [],
      description: `<p>
    This is about my portfolio where you can explore about me, my skills,my achivemets And lot of.<br/><br/>Frankly, This is the Site where you are already reading this stuff.
  </p>`,
      link: "Rutvik Portfolio",
    },
    {
      title: "User Server",
      organization: "Personal Project",
      frameworks: ["Node JS"],
      thirdParty: [],
      description: `<p>
      User server is a server made for user authentication ,login and register with authorization using JWT and passportJS.That was a server that can be used to register and login features for user with proper authentication and authorized routes.
  </p>`,
      link: "Local server ",
    },
  ];

  return (

      <div className="h-full py-10 space-y-4 w-full bg-gradient-to-b from-black to-gray-900 py- px-5">
        <div>
          <h1 className="text-xl font-medium text-sky-600  text-center ">
            Projects
          </h1>
          <h1 className="text-2xl font-medium text-gray-300 text-center">
            Witness my Creativity And skills here...
          </h1>
        </div>
        <div className="flex w-full justify-around flex-wrap max-md:space-y-2">
          {myProjects?.map((x, index) => {
            let{description}=x
            return (
              <div key={index} className="w-[300px] h-[420px] mb-3 bg-transparent cursor-pointer group perspective">
                <div className="relative group-hover:my-rotate w-full h-full duration-1000 preserve-3d">
                  <div className="absolute shadow-md shadow-sky-600 p-3 rounded-md backface-hidden bg-gradient-to-b from-gray-700 to-gray-900 text-white border border-sky-300 w-full h-full">
                    <h1 className="font-bold text-sky-500 text-2xl text-center underline">
                      {x.title}
                    </h1>
                    <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: description }} />
                    <h1 className="font-bold text-sky-400 mt-2">
                      Language & Frameworks:
                    </h1>
                    <ul className="ml-2">
                      {x.frameworks.map((y, index) => {
                        return <li>{y}</li>;
                      })}
                    </ul>
                    {
                      x.thirdParty?.length ?
                      <> <h1 className="font-bold text-sky-400 mt-2">
                      3rd Party Integrations:
                    </h1>
                    <ul className="ml-2">
                    {x.thirdParty.map((z, index) => {
                        return <li>{z}</li>;
                      })}
                    </ul>
                      </>:<></>
                   
                    }
                  </div>
                  <div className="absolute shadow-md shadow-sky-600 c1 rounded-md p-2 backface-hidden my-rotate w-full h-full bg-gradient-to-b border border-sky-300  from-gray-700 to-gray-900">
                  <div className="text-white" dangerouslySetInnerHTML={{ __html: description }} />
                    <button className="hero-btn bg-gray-600 border border-gray-400 text-white text-sm">
                      {x.link}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
 
  );
};

export default Projects;
