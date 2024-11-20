import Check from 'feather-icons-react/build/IconComponents/Check'
import X from 'feather-icons-react/build/IconComponents/X'
import React from 'react'

const Popup = () => {
  return (
    <div className={`absolute z-50 bg-gray-800 right-2`}>
  <div className=" text-sm rounded border shadow-sm pointer-events-auto bg-clip-padding w-72">
    <div className="p-3 flex justify-between"><p className='text-sky-500'>Message Sent !</p><Check className='text-green-600 rounded-full p-1 bg-green-200'/></div>
  </div>
</div>

  )
}

export default Popup