import React from 'react'
import myphoto from '../Assets/myphoto.jpg'
const About = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-black h-fit'>

          <h1 className="text-xl font-medium text-sky-600  text-center ">
            About
          </h1>
          <h1 className="text-2xl font-medium text-gray-300 text-center">
            Who am i?...
          </h1>
          <div className='p-5 flex justify-around  m-5 rounded-md'>
            <p className='text-white w-1/2'>
Hello there, I Am Rutvik Amarcholi working as a <b>Sr.MERN Stack Developer</b> with <b>1 year</b> of experience.I completed Many company Projects As well as freelance projects through out my joiurney as mentioned in projects section.

<br/>
<br/>
I am <b>self-taught programmer</b> and took 2 months to learn React Js And Node js.Python And React Native Are my future Interests and will cover it Soon.Also I use VS code As my IDE and flexible to work with another IDEs.
<br/>
<br/>
I am very flexible and always Ready to learn new thing and languages.I also tried Blender software and other animation softwares.Also i can learn thing faster and can easily addopt new Environment.
<br/>
<br/>
I am very puctual, gentle, Hard-working, kind, enthusiastic, And friendly person.
<br/>
<br/>
My hobbies are reading books, playing games,travelling, research and music.
          </p>
          <div className='myphoto'>
<img className='h-96' src={myphoto}/>
          </div>
          </div>
          
        </div>
  )
}

export default About