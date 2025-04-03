import React from 'react'

const Advertize = () => {
  return (
    <div className=' py-[80px] bg-brand mt-12 '>
        <div className="container">
            <div className="flex justify-between  ">
                <div className="">
                    <h2 className='font-bold text-[32px] leading-[32px] text-white tracking-[-1.61px]   '>Porto is everything you need to create a website!</h2>
                    <p className=" text-center mt-2 text-base leading-[26px] text-white/70   ">The Best HTML Site Template on ThemeForest</p>
                </div>
                <button type="button" className=' uppercase px-12 py-3 h-fit border-2 border-white text-white rounded-[40px] font-bold  '  >buy now</button>
            </div>
        </div>
    </div>
  )
}

export default Advertize