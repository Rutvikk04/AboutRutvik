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
    // <div className="h-full space-y-4 w-full bg-gradient-to-b from-black to-gray-900 py- px-5">
    //     <div>
    //         <h1 className="text-xl font-medium text-sky-600  text-center ">
    //     Projects
    //   </h1>
    //   <h1 className="text-2xl font-medium text-gray-300 text-center">
    //     Witness my Creativity And skills here...
    //   </h1>
    //     </div>

    //   {/* Projects */}
    //   <div className="p-3 my-4 space-y-4 border-t border-gray-500 bg-gradient-to-b from-black to to-blue-950">
    //     <span className="p-1 font-medium text-2xl border-s-2 border-t-2 border-e-0 border-b-0 border-blue-500 ">
    //       Shopeasy.ai
    //     </span>
    //     <div>
    //       <b className="mr-3">Language & FrameWorks:</b>
    //       <span className="font-medium text-blue-500">
    //         React Js, Node Js,TailwindCSS MongoDb, Express Js,CloudFlare
    //       </span>
    //     </div>
    //     <p>
    //       ShopEasy.ai Is An ai Based ecommerce Platform that Provides Ecommerce
    //       services similar to Shopify.An User Can Make it's own store and can
    //       easily maintain his store using Easy admin panel. Also User Can
    //       Connect Their Social Media platforms like WhatsApp,Facebook And
    //       Instagram to Increase Their Business Growth. This Product Has 3rd
    //       party APIs integration like ShipRocket for Shipping and Razorpay for
    //       Payment Gateaway That is easy to use and fast.Also There Is OpenAi
    //       Integration To Generate Contents Like description.
    //       <br></br>
    //       <br></br>
    //       The Project Has 3 Modules:<br></br>
    //       1.Super-Admin:Super-Admin is Operated By Team shopEasy to Handle
    //       Admins(store Owners) And Users(customers)
    //       <br />
    //       2.Admin:Admin Panel For Admin to Maintain And Customize Their Store .
    //       <br />
    //       3.User:Ecommerce WebApp Of Admins Where customers Can buy Admin
    //       Services
    //     </p>
    //   </div>
    //   <div className="p-3 my-4 space-y-4 border-t border-gray-500 bg-gradient-to-b from-black to to-blue-950">
    //     <span className="p-1 font-medium text-2xl border-s-2 border-t-2 border-e-0 border-b-0 border-blue-500 ">
    //       BMI Calculator
    //     </span>
    //     <div>
    //       <b className="mr-3">Language & FrameWorks:</b>
    //       <span className="font-medium text-blue-500">
    //       Javascript
    //       </span>
    //     </div>
    //     <p>
    //       BMI calculator is simply used to measure body mass index from your height and weight.This calculator gives how underweight or overweighted you are.<br/>
    //       This project was developed by me when i was learning about Javascript.I used complete maths and javascript maths functions.However i was not so good in CSS so this project has intermediate CSS.
    //     </p>
    //   </div>
    // </div>
    <>
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
              <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
                <div className="relative  group-hover:my-rotate w-full h-full duration-1000 preserve-3d">
                  <div className="absolute shadow-md shadow-sky-600 p-3 rounded-md backface-hidden bg-gradient-to-b from-sky-600 to-sky-800 text-white border border-gray-300 w-full h-full">
                    <h1 className="font-bold text-white text-2xl text-center underline">
                      {x.title}
                    </h1>
                    <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: description }} />
                    <h1 className="font-bold text-gray-900 mt-2">
                      Language & Frameworks:
                    </h1>
                    <ul className="ml-2">
                      {x.frameworks.map((y, index) => {
                        return <li>{y}</li>;
                      })}
                    </ul>
                    {
                      x.thirdParty?.length ?
                      <> <h1 className="font-bold text-gray-900 mt-2">
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
                  <div className="absolute shadow-md shadow-sky-600 c1 rounded-md p-2 backface-hidden my-rotate w-full h-full bg-gradient-to-b border border-gray-300 from-sky-800 to-sky-600">
                  <div className="text-white" dangerouslySetInnerHTML={{ __html: description }} />
                    <button className="hero-btn bg-gray-300 text-black text-sm">
                      {x.link}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
