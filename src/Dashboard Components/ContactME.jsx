import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Popup from '../popup/Popup';
import messengerAnimation from "../Assets/animation/messenger.json"
import Lottie from 'lottie-react';
const ContactME = () => {
  const form = useRef();
  const serviceID = (import.meta.env.VITE_EMAIL_SERVICE_ID)
  const templateID = (import.meta.env.VITE_EMAIL_TEMPLATE_ID)
  const publicKey = (import.meta.env.VITE_EMAIL_PUBLIC_KEY)
  const [popUp, setPopUp] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const sendEmail = async (e) => {
    setLoader(true)
    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      setIsSent(true)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoader(false)
    }
  };
  useEffect(() => {

    if (isSent) {
      setTimeout(() => {
        setIsSent(false)
      }, 3000);
    }
  }, [isSent])

  return (
    <div id='Contact' className=" z-50  bg-gradient-to-b py-16 from-gray-900 to-black">
      {
        popUp &&
        <Popup />
      }
      <div className="relative w-fit mx-auto text-center z-10">
        <h4 className="glow-underline text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-2">
          Reach <span className="text-accentCyan"> Out
          </span>
        </h4>
        <h5 className="text-sm md:text-base uppercase tracking-widest font-light mb-2 text-textMuted">
          I’m just one click away.
        </h5>
        {/* Decorative line */}
        <div className="w-36 mx-auto h-px bg-gradient-to-r from-accentCyan to-transparent mb-12" />
      </div>
      <div className="p-5 max-w-[1440px] mx-auto flex max-md:flex-col justify-between rounded-md">
        <div className='flex flex-col sm:flex-row gap-5 mx-auto'>
          <div className="w-full max-w-md  mx-auto ">
            <form ref={form} className="space-y-8">
              <div className="form-input">
                <input type="text" id="name" name='from_name' placeholder=" " required="" />
                <label htmlFor="name">Name</label>
                <div className="focus-underline" />
              </div>
              <div className="form-input">
                <input type="email" id="email" name='user_email' placeholder=" " required="" />
                <label htmlFor="email">Email</label>
                <div className="focus-underline" />
              </div>
              <div className="form-input">
                <textarea id="message" placeholder=" " required="" name='message' defaultValue={""} />
                <label htmlFor="message">Message</label>
                <div className="focus-underline" />
              </div>
              {
                loader && !isSent &&
                <button
                  className=" hero-btn animate-bounce text-yellow-500 shadow-md shadow-yellow-200 my-6 "
                >
                  Sending...
                </button>
              }
              {
                !loader && isSent &&
                <button
                  className="btn-primary animate-bounce text-green-500 shadow-md shadow-green-300 my-6 "
                >
                  Message Sent
                </button>

              }
              {
                !loader && !isSent &&
                <button
                  type='button'
                  onClick={(e) => sendEmail(e)}
                  className="btn-primary my-6 "
                >
                  Send Message
                </button>

              }
            </form>
          </div>
          <div className='w-full max-w-[600px]'>
            <Lottie style={{ width: "100%" }} loop={true} animationData={messengerAnimation} />
          </div>
        </div>
        {/* <div className="w-full md:px-12  lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">

          <form ref={form}  >

            <div className="grid grid-cols-1 gap-5 z-50  mt-5">
              <input
                className="form-input"
                type="text"
                name='from_name'
                placeholder="Name*"
              />
              <input
                className="form-input"
                name='user_email'
                placeholder="Email*"
              />
              <textarea
                placeholder="Message*"
                name='message'
                className="form-input "
              />
            </div>

            <div className="flex w-full justify-end">
              {
                loader && !isSent &&
                <button
                  className=" hero-btn animate-bounce text-yellow-500 shadow-md shadow-yellow-200 my-6 "
                >
                  Sending...
                </button>
              }
              {
                !loader && isSent &&
                <button
                  className="btn-primary animate-bounce text-green-500 shadow-md shadow-green-300 my-6 "
                >
                  Message Sent
                </button>

              }
              {
                !loader && !isSent &&
                <button
                  type='button'
                  onClick={(e) => sendEmail(e)}
                  className="btn-primary my-6 "
                >
                  Send Message
                </button>

              }

            </div>
          </form>

        </div> */}


      </div>
    </div>
  )
}

export default ContactME