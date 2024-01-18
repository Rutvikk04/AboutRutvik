import React ,{useEffect, useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import Popup from '../popup/Popup';
const ContactME = () => {
  const form = useRef();
  const serviceID=(import.meta.env.VITE_EMAIL_SERVICE_ID)
  const templateID=(import.meta.env.VITE_EMAIL_TEMPLATE_ID)
  const publicKey=(import.meta.env.VITE_EMAIL_PUBLIC_KEY)
  const [popUp,setPopUp]=useState(false)
  const [loader,setLoader]=useState(false)
  const [isSent,setIsSent]=useState(false)
  const sendEmail = async(e) => {
    setLoader(true)
    try {
          await emailjs.sendForm(serviceID, templateID , form.current, publicKey)
          setIsSent(true)
    } catch (error) {
      console.log(error)
    }
    finally{
     setLoader(false) 
    }     
  };
  useEffect(()=>{

    if(isSent){
      setTimeout(() => {
        setIsSent(false)
      },3000 );
    }
  },[isSent])

  return (
    <div id='Contact' className="  bg-gradient-to-b from-gray-900 to-black ">
      {
      popUp &&
      <Popup/>
    }
    <h1 className="text-xl font-medium text-sky-600  text-center ">Contact Me</h1>
    <h1 className="text-2xl font-medium  text-gray-300 text-center max-sm:text-xl">
     Your word matters!
    </h1>
    <div class="loader-line"></div>
    <div className="p-5 max-w-[1440px] mx-auto flex max-md:flex-col justify-between rounded-md">
    <div className="w-full md:px-12  lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
  <div className="flex w-full justify-between">
    <h1 className="font-bold uppercase text-sky-500 text-5xl max-md:text-3xl">
      Send Me a <br /> message
    </h1>
 {
  loader &&!isSent &&
    <button
      className=" hero-btn animate-bounce text-yellow-500 shadow-md shadow-yellow-200 my-6 "
    >
      Sending...
    </button>
 }
 {
  !loader && isSent &&
    <button
      className=" hero-btn animate-bounce text-green-500 shadow-md shadow-green-300 my-6 "
    >
      Message Sent
    </button>

 }
 {
  !loader && !isSent &&
      <button
      type='button'
      onClick={(e)=>sendEmail(e)}
        className=" hero-btn my-6 "
      >
       Send Message
      </button>
  
   } 

  </div>
  <form ref={form} >

  <div className="grid grid-cols-1 gap-5  mt-5">
    <input
      className="w-full bg-gray-800 text-white mt-2 p-3 rounded-lg focus:outline-none shadow-sm shadow-white focus:shadow-outline"
      type="text"
      name='from_name'
      placeholder="Name*"
    />
    <input
      className="w-full bg-gray-800 text-white mt-2 p-3 rounded-lg focus:outline-none shadow-sm shadow-white focus:shadow-outline"
      name='user_email'
      placeholder="Email*"
    />
  </div>
  <div className="my-4">
    <textarea
      placeholder="Message*"
      name='message'
      className="w-full bg-gray-800 text-white mt-2 p-3 rounded-lg focus:outline-none shadow-sm shadow-white focus:shadow-outline"
    />
  </div>
  </form>
 
</div>
    </div>
    </div>
  )
}

export default ContactME