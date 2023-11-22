import React from 'react'
const Experience = () => {
  const myexp=[{
    'org_name':'Webzeel pvt.ltd',
    'date':"01-04-2023 to Present",
    "Role":"Sr.MERN Stack Developer",
    "team":8,
    "responsibilities":["Handle Front-End Using React","Assign Task To juniors And Guide Them","Train New Joinees","Conduct Interviews For New Joinees",'R&D on New Features And Project Development',"webApp optimization"]
  },
{
  'org_name':'Nucleus Lab pvt.ltd',
  'date':"01-11-2022 to 01-04-2023",
  "Role":"Trainee MERN Stack Developer",
  "team":5,
  "responsibilities":["Learn Advance JS","Learn React JS","Get Training On Node JS","Covered MongoDB and Express JS"]
}
]
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black h-fit">
      <h1 className="text-xl font-medium text-sky-600  text-center ">Experience</h1>
      <h1 className="text-2xl font-medium text-gray-300 text-center">
        Pit-stops of my journey..
      </h1>
      <div className='  m-auto   justify-between px-6 py-3'>{
        myexp.map((x,index)=>{
          return (

<div className='flex bg-gradient-to-b from-black to-transparent space-y-20 h-auto w-1/2 mx-auto my-4'>
  {/* <div className='w-1 rounded-md h-full bg-gradient-to-b from-blue-500 to-white'></div> */}
  <div className='ml-1 w-full h-full text-white rounded-r-md p-4'>
    <div className='flex justify-between '>
    <h1>Organization: {x.org_name}</h1>
    <h1>Duration: {x.date}</h1>
    </div>
    <h1>Role: {x.Role}</h1>
    <h1>Team-Size: {x.team}</h1>
    <h1>Key-Responsibilities:</h1>

    <ul className='ml-3'>
      {x.responsibilities.map((y,index)=>{
        return (
          <li>{y}</li>
        )
      })}
    </ul>
  </div>
</div>
          )

        })
      }
      </div>
    </div>
  )
}

export default Experience