import React from 'react'

const ServiceCard = ({title , text}) => {
  return (
    <div className=' text-center px-9   '>
        <h3 className=' font-bold text-[25px] leading-[27px] tracking-[-1.26px] capitalize   '>{title}</h3>
        <p className=" text-[14px] leading-[26px] text-[#777777] mx-6  mt-4 ">{text}</p>
    </div>
  )
}

export default ServiceCard