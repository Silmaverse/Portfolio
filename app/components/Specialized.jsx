import React from 'react'
import Image from 'next/image'
import Spicon from "@/public/special_icon1.png"
import Spiocn1 from "@/public/special_icon2.png"
import Spicon2 from "@/public/special_icon3.png"

const Specialized = () => {
  return (
    <>
      <section id='specalized' className='mt-36 bg-[#FBFBFB] py-[114px]'>
        <div className="container">

          <div className="special_row">
            <h2 className='text-[12px] font-Inter font-medium text-heroname text-center'><span className='inline-block w-4 h-0.5 text-[#D9D9D9]'>--</span>SERVICES</h2>
            <h2 className='text-4xl font-Jakatra font-bold text-primary mt-2 text-center'>Specialized in</h2>

            <div className="mt-[104px] flex justify-between items-center">

              <div className="first_card w-[361px] px-[57px] py-[53px] bg-white flex flex-col gap-4 justify-center items-center rounded-lg">
                <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">

                  <div className="image w-6 h-6 relative">
                    <Image src={Spicon} alt="error" fill={true} />

                  </div>


                </div>

                <h2 className='text-base font-Jakatra font-medium text-primary'>UI/UX Design</h2>

                <p className=' W-[247px] text-center text-sm font-Inter font-normal text-primary'>Turn what you have in mind of a digital product into
                  reality. For any platform you consider.</p>




              </div>

              <div className="second_card w-[361px] px-[57px] py-[53px] bg-white flex flex-col gap-4 justify-center items-center rounded-lg">
                <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">

                  <div className="image w-6 h-6 relative">
                    <Image src={Spiocn1} alt="error" fill={true} />

                  </div>


                </div>

                <h2 className='text-base font-Jakatra font-medium text-primary'>Application Development</h2>

                <p className=' W-[247px] text-center text-sm font-Inter font-normal text-primary'>Standard designing, building, and
                  implementing your applications with documentation.
                  .</p>




              </div>

              <div className="third_card w-[361px] px-[57px] py-[53px] bg-white flex flex-col gap-4 justify-center items-center rounded-lg">
                <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">

                  <div className="image w-6 h-6 relative">
                    <Image src={Spicon2} alt="error" fill={true} />

                  </div>


                </div>

                <h2 className='text-base font-Jakatra font-medium text-primary'>Web Development</h2>

                <p className=' W-[247px] text-center text-sm font-Inter font-normal text-primary'>Create and maintain your websites and also take care of its performance and traffic capacity.
                  .</p>




              </div>


            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Specialized