import React from 'react'
import Text from "@/app/utill/Text";
import CommonCard from "@/app/utill/CommonCard"
import Spicon from "@/public/special_icon1.png"
import Spiocn1 from "@/public/special_icon2.png"
import Spicon2 from "@/public/special_icon3.png"

const Techstack = () => {
  return (
    <>
      <section id='techstack'  className='mt-[145px]  bg-[#f8f8f8] py-[114px]'>
        <div className="container">
         
          <Text variant="h3" className='text-center'><Text variant="span">--</Text> TechStack</Text>

          <Text variant="h2" className='text-center'>
           
            Specialized in
          </Text>

           <div className="mt-[104px] gap-4 lg:gap-0 flex flex-wrap justify-between items-center">

            
            <CommonCard animation={"flip-left"} spicon={Spicon}  title={"React"} description={"Turn what you have in mind of a digital product into reality. For any platform you consider."} />

          
            <CommonCard animation={"flip-up"} spicon={Spiocn1}  title={"Next.js"} description={"Standard designing, building, and implementing your applications with documentation."} />

            <CommonCard animation={"flip-right"} spicon={Spicon2}  title={"tailwindcss"} description={"Create and maintain your websites and also take care of its performance and traffic capacity."} />




            </div>


        </div>
      </section>
    </>
  )
}

export default Techstack