import React ,{useRef} from 'react'
import emailjs from '@emailjs/browser';
const ContactME = () => {
  const form = useRef();
  const serviceID=(import.meta.env.VITE_EMAIL_SERVICE_ID)
  const templateID=(import.meta.env.VITE_EMAIL_TEMPLATE_ID)
  const publicKey=(import.meta.env.VITE_EMAIL_PUBLIC_KEY)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID , form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black ">
    <h1 className="text-xl font-medium text-sky-600  text-center ">Contact Me</h1>
    <h1 className="text-2xl font-medium  text-gray-300 text-center max-sm:text-xl">
     Your word matters!
    </h1>
    <div class="loader-line"></div>
    <div className="p-5 max-w-[1440px] mx-auto flex max-md:flex-col justify-between rounded-md">
    <div className="w-full md:px-12  lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
  <div className="flex w-full justify-between">
    <h1 className="font-bold uppercase text-sky-800 text-5xl">
      Send Me a <br /> message
    </h1>
 
    <button
      className=" hero-btn my-6 "
      onClick={(e)=>sendEmail(e)}
    >
      Send Message
    </button>

  </div>
  <form ref={form}>

  <div className="grid grid-cols-1 gap-5  mt-5">
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type="text"
      name='user_name'
      placeholder="Name*"
    />
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type="email"
      name='user_email'
      placeholder="Email*"
    />
  </div>
  <div className="my-4">
    <textarea
      placeholder="Message*"
      name='message'
      className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      defaultValue={""}
    />
  </div>
  </form>
 
</div>
    </div>
    </div>
  )
}

export default ContactME