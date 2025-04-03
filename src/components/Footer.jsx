import React from 'react'

import { IoLogoWhatsapp } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' bg-[#212529] pt-[50px] '>
        <div className="container">
            <div className="flex justify-between ">
                <img src="/images/logo-footer.png" alt="footlogo" />
                <div className="flex gap-10">
                    <div className="">
                        <h4 className=' uppercase font-semibold text-[12px] leading-[18px] tracking-[-0.6px] text-white  '>for work</h4>
                        <a className='flex items-center gap-2 text-white' href='tel:(123) 465-7890'><IoLogoWhatsapp className='text-brand'/><span>(123) 465-7890</span></a>
                    </div>
                    <div className="">
                        <h4 className=' uppercase font-semibold text-[12px] leading-[18px] tracking-[-0.6px] text-white  '>los angelles</h4>
                        <a className='flex items-center gap-2 text-white' href='tel:(123) 465-7890'><IoLogoWhatsapp className='text-brand'/><span>(123) 465-7890</span></a>
                    </div>
                </div>
            </div>
        </div>

        {/* divider */}
        <hr  className=' mt-10 border-t-1 border-white/10    ' />

        {/* copyright */}
        <div className="container">
            <div className="flex py-6 justify-between   " >
                <p className=" text-[11px] leading-[26px] text-[#555555]   ">© Copyright 2025. All Rights Reserved.</p>
                <ul className=' flex gap-6 items-center '>
                    <li><a href="mailto:mail@example.com" className='flex gap-2 items-center text-[11px] leading-[26px] text-[#555555] hover:text-white   '  ><LuMail className='text-brand'/><span>mail@example.com</span></a></li>
                    <li className='w-[30px] h-[30px] hover:bg-brand rounded-full grid place-items-center'><a href="#" className=' text-white  rounded-full hover:bg-brand '><FaFacebookF/></a></li>
                    <li className='w-[30px] h-[30px] hover:bg-brand rounded-full grid place-items-center'><a href="#" className=' text-white  rounded-full hover:bg-[] '><FaXTwitter/></a></li>
                    <li className='w-[30px] h-[30px] hover:bg-brand rounded-full grid place-items-center'><a href="#" className=' text-white  rounded-full hover:bg-[] '><FaLinkedinIn/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer