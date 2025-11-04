import React from 'react'
import Image from 'next/image'
import Portfolio1 from "@/public/Portfolio item1.jpg"
import Portfolio2 from "@/public/Portfolio item2.jpg"
import Portfolio3 from "@/public/Portfolio item3.jpg"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";



const Portfolio = () => {
    return (
        <>
            <section id='potfolio' className='mt-[113px]'>
                <div className="container">
                    <div className="first_row flex justify-between items-center" >

                        <div className="">

                            <h2 className='text-[12px] font-Inter font-medium text-heroname '><span className='inline-block w-4 h-0.5 text-[#D9D9D9]'>--</span>MY WORKS</h2>
                            <h2 className='text-4xl font-Jakatra font-bold text-primary mt-2 '>Featured Portfolios
                            </h2>
                        </div>

                        <div className="flex gap-4">

                            <div className="w-10 h-10 rounded-2xl bg-[#EAE6FE] text-brand text-2xl flex justify-center items-center"><MdChevronLeft /></div>
                            <div className="w-10 h-10 rounded-2xl bg-[#EAE6FE] text-brand text-2xl flex justify-center items-center"><MdChevronRight /></div>

                        </div>

                    </div>

                    <div className="images flex justify-between items-center mt-36" >

                        <div className="first_image relative w-[361px] h-[402px]">
                            <Image src={Portfolio1} alt='err' fill={true} />

                        </div>

                        <div className="first_image relative w-[361px] h-[402px]">
                            <Image src={Portfolio2} alt='err' fill={true} />

                        </div>


                        <div className="first_image relative w-[361px] h-[402px]">
                            <Image src={Portfolio3} alt='err' fill={true} />

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Portfolio