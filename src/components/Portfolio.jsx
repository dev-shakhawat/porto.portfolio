import React, { useState } from 'react'
import PortCard from './common/PortCard'


// images
import project1 from "../assets/port1.jpg"
import project2 from "../assets/port2.jpg"
import project3 from "../assets/port3.jpg"
import project4 from "../assets/port4.jpg"
import project5 from "../assets/port5.jpg"
import project6 from "../assets/port6.jpg"
import project7 from "../assets/port7.jpg"
import project8 from "../assets/port8.jpg"
import project9 from "../assets/port9.jpg"
import project10 from "../assets/port10.jpg"




const Portfolio = () => {

  const portArr = [ project4 , project1 , project2 ,project9,project6 ,  project7 ,project10,  project8, project3 , project5 ]

    let [activetab , setActivetab] = useState(0)
    const tabs = ["show all" , "websites" , " logos" , "brands" , "medias"]
  return (
    <div className=' py-12  '>
        <div className="container">
            <div className="mb-6">
               {tabs.map((tab , index) => (
                   <button key={index} onClick={()=>setActivetab(index)} className={`text-[13px] leading-[24px] tracking-[-0.8px] cursor-pointer  uppercase font-medium mr-10 px-2 ${activetab == index ? "text-brand border-b-2 border-brand " : "text-[#777777] border-b-2 border-transparent   "}    `}>{tab}</button>
               ))}
            </div>

            {/* portfolios */}
            {activetab == 0 && <PortCard  portlists={portArr}  />}
            
        </div>
    </div>
  )
}

export default Portfolio