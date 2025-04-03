import React from 'react'
import ServiceCard from './common/ServiceCard'

const Service = () => {
    
    const services = [
        {title : "mobile app" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius."},
        {title : "creative websites" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius."},
        {title : "SEO optimized app" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius."},
    ]
  return (
    <div className=' pt-[110px] pb-[70px] bg-[#f4f4f4]  '>
        <div className="container">
            <div className="flex">
               {services.map((item , index)=>  <ServiceCard title={item.title} text={item.text} />)}
            </div>
        </div>
    </div>
  )
}

export default Service