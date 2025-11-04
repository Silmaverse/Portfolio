import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import hero from "@/public/Hero Image.png"




const Hero = () => {
  return (
    <>
     <section id='hero' className='mt-[151px]'>

        <div className="container">
            <div className="hero_row flex justify-between items-center">
                <div className="left_part">
                    <h2 className='text-[12px] font-Inter font-medium text-heroname'>-- MY NAME IS</h2>
                    <h2 className='text-[44px] font-Jakatra font-bold text-primary mt-4'>Alex <span className='text-brand'> Smith.</span></h2>
                    <p className='w-[538px] text-base font-Inter font-medium text-primary mt-8'>Creative front-end developer with more than +5 years of experience in enterprise 
                        companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>

                    <div className='flex gap-8 items-center mt-10'>
                        <FaInstagram className='text-2xl text-primary'/>
                        <LuGithub className='text-2xl text-primary'/>
                        <LuTwitter className='text-2xl text-primary'/>
                        <FiLinkedin className='text-2xl text-primary'/>




                    </div>
                </div>

                <div className="right_part w-[546px]  h-[496px] relative">
                    <Image src={hero}  alt='hero_err' fill={true}/>

                </div>

            </div>
        </div>

     </section>
    </>
  )
}

export default Hero