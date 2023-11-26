import React from "react";
import { ArrowRight } from "feather-icons-react/build/IconComponents";
const Experience = () => {
  const myexp = [
    {
      org_name: "Webzeel pvt.ltd",
      date: "01 April 2023 to Present",
      Role: "Sr.MERN Stack Developer",
      team: 8,
      responsibilities: [
        "Handle Front-End Using React",
        "Assign Task To juniors And Guide Them",
        "Train New Joinees",
        "Conduct Interviews For New Joinees",
        "R&D on New Features And Project Development",
        "webApp optimization",
      ],
    },
    {
      org_name: "Nucleus Lab pvt.ltd",
      date: "01 Novermber 2022 to 30 March 2023",
      Role: "Trainee MERN Stack Developer",
      team: 5,
      responsibilities: [
        "Learn Advance JS",
        "Learn React JS",
        "Get Training On Node JS",
        "Covered MongoDB and Express JS",
      ],
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black h-fit">
      <h1 className="text-xl font-medium text-sky-600  text-center ">
        Experience
      </h1>
      <h1 className="text-2xl font-medium text-gray-300 text-center">
        Pit-stops of my journey..
      </h1>
      <div className="  m-auto flex max-sm:flex-col  justify-between px-6 py-3">
        {myexp.map((x, index) => {
          return (
            <div key={index} className="flex max-sm:w-full bg-gradient-to-b from-black to-gray-900 shadow-md shadow-sky-300 rounded-md space-y-20 h-auto w-1/2 mx-auto my-4  mx-2">
              <div className="ml-1 w-full h-full text-white rounded-r-md p-4">
                <h1 className="text-center text-sky-500 text-2xl">
                  {x.org_name}
                </h1>
                <h1 className="text-center text-gray-400 text-sm mb-2">
                  {x.date}
                </h1>
                <div className="flex flex-nowrap justify-between max-md:flex-col">
                  <h1 className="text-sky-600 font-medium">
                    Role: <span className=" text-gray-200 whitespace-nowrap">{x.Role}</span>
                  </h1>
                  <h1 className="text-sky-600 font-medium">
                    Team Size: <span className=" text-gray-200">{x.team}</span>
                  </h1>
                </div>
                <h1 className="text-sky-600 font-medium mt-2">
                  Key-Responsibilities:
                </h1>

                <ul className="ml-3 text-gray-300">
                  {x.responsibilities.map((y, index) => {
                    return (
                      <div className="flex space-x-2">
                        <ArrowRight className="w-4" />
                        <li>{y}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
