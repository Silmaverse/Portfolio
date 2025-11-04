import React from 'react'
import { MdChevronRight } from 'react-icons/md'

const Experience = () => {
  return (
    <>
    <section id='experience'  className=' mt-44 bg-[#FBFBFB] py-[104px]'>

        <div className="container">
             <h2 className='text-[12px] font-Inter font-medium text-heroname '><span className='inline-block w-4 h-0.5 text-[#D9D9D9]'>--</span>career path</h2>
                            <h2 className='text-4xl font-Jakatra font-bold text-primary mt-2 '> Work Experices
             </h2>


              <div className="flex gap-[137px] items-center">
             <div className="w-[281px] mt-20 left-part">

              <button className='w-full h-[52px] px-8 hover:bg-white text-base font-Inter font-medium  text-primary hover:text-brand flex items-center justify-between '> Apple  <MdChevronRight className='text-white hover:text-brand' /> </button>

              <button className='w-full h-[52px] px-8  hover:bg-white text-base font-Inter font-medium text-primary hover:text-brand flex items-center justify-between '>
                 Microsoft <MdChevronRight className='text-white hover:text-brand' /> </button>

                  <button className='w-full h-[52px] px-8  hover:bg-white text-base font-Inter font-medium text-primary hover:text-brand flex items-center justify-between '>
                 Facebook <MdChevronRight className='text-white hover:text-brand' /> </button>

                  <button className='w-full h-[52px] px-8  hover:bg-white text-base font-Inter font-medium text-primary hover:text-brand flex items-center justify-between '>
                 Slack <MdChevronRight className='text-white hover:text-brand' /> </button>


             </div>

             <div className="right_part">
                <h2 className='text-[18px] font-Jakatra font-medium text-primary'>Front-end Developer  Apple .Inc</h2>
                <p className='text-sm font-Inter font-normal text-heroname mt-2 '>California, United States</p>
                <p className='text-sm font-Inter font-normal text-heroname mt-4'>Nov 2020 - Present · Full-time</p>

                <div className="flex gap-4 items-center mt-4"> 


                    <div className="inline py-1 px-2  border border-[#F1F1F1] rounded-sm text-[12px] text-heroname font-Inter font-medium">Swift</div>

                    <div className="inline py-1 px-2  border border-[#F1F1F1] rounded-sm text-[12px] text-heroname font-Inter font-medium">Go</div>
                </div>


                    <div className="border border-[#F1F1F1] mt-8 w-full"></div>

             </div>
             </div>


        </div>

    </section>
    </>
  )
}

export default Experience