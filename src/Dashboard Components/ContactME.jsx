import React from 'react'

const ContactME = () => {
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
      Send us a <br /> message
    </h1>
 
    <button
      className=" hero-btn my-6 "
    >
      Send Message
    </button>

  </div>
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="First Name*"
    />
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Last Name*"
    />
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type="email"
      placeholder="Email*"
    />
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type="number"
      placeholder="Phone*"
    />
  </div>
  <div className="my-4">
    <textarea
      placeholder="Message*"
      className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      defaultValue={""}
    />
  </div>
 
</div>
    </div>
    </div>
  )
}

export default ContactME