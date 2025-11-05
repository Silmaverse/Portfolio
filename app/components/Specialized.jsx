import React from 'react'
import Image from 'next/image'
import Spicon from "@/public/special_icon1.png"
import Spiocn1 from "@/public/special_icon2.png"
import Spicon2 from "@/public/special_icon3.png"
import CommonCard from "@/app/utill/CommonCard"



const Specialized = () => {
  return (
    <>
      <section id='specalized' className='mt-36 bg-[#f8f8f8] py-[114px]'>
        <div className="container">

          <div className="special_row">
            <h2 className='text-[12px] font-Inter font-medium text-heroname text-center'><span className='inline-block w-4 h-0.5 text-[#D9D9D9]'>--</span>SERVICES</h2>
            <h2 className='text-4xl font-Jakatra font-bold text-primary mt-2 text-center'>Specialized in</h2>

            <div className="mt-[104px] gap-3 lg:gap-0 flex flex-wrap justify-between items-center">

            
            <CommonCard  animation={"zoom-in-right"} spicon={Spicon}  title={"UI/UX Design"} description={"Turn what you have in mind of a digital product into reality. For any platform you consider."} />

          
            <CommonCard animation={"zoom-out-up"} spicon={Spiocn1}  title={"Application Development"} description={"Standard designing, building, and implementing your applications with documentation."} />

            <CommonCard  animation={"zoom-in-left"}  spicon={Spicon2}  title={"Web Development"} description={"Create and maintain your websites and also take care of its performance and traffic capacity."} />




            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Specialized