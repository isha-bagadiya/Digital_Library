import React from 'react'
import map from '../assets/Location.svg'

const location = () => {
  return (
      <div className=" mt-11 w-full sm:mt-20">
      <h1 className="mx-[7%] text-[#4475F2] text-[10px] sm:text-[15px] font-bold">
        LOCATION
      </h1>
      <p className="mx-[7%] text-[5vw] sm:text-[4vw] lg:text-[3.5vw] font-extrabold">
      🗺• Our Library Location
      </p>
      <img src={map} alt="" className='my-4 w-full'/>
    </div>
  )
}

export default location
