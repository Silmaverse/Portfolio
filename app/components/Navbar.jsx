import React from 'react'
import Image from "next/image";
import logo from "../../public/brand.svg"
import { GoMoon } from "react-icons/go";


const Navbar = () => {
  return (
    <nav id='navbar' className='pt-[41px]'>
        <div className="container">
            <div className="portfolio_row flex justify-between items-center">

                <div className="logo w-6 lg:w-10 h-6 lg:h-10 relative ">
                    <Image src={logo} fill={true} alt='company_logo' style={{backgroundColor:"white"}} />

                </div>


                <div className="nav_item hidden lg:block">
                    <ul className='flex items-center gap-1 lg:gap-14'>
                        <li className='text-[12px] lg:text-base font-Inter font-medium text-primary'>Services</li>
                        <li className='text-[12px] lg:text-base font-Inter font-medium text-primary'>Portfolios</li>
                        <li className='text-[12px] lg:text-base font-Inter font-medium text-primary'>Experience</li>
                        <li className='text-[12px] lg:text-base font-Inter font-medium text-primary'>Blog</li>
                        <li className='text-[12px] lg:text-base font-Inter font-medium text-primary'>...</li>
                    </ul>

                </div>

                <div className="theme">
                  <GoMoon className='text-[20px] lg:text-2xl text-primary' />
                </div>

                <button className="resume_btn w-[100px] lg:w-[102px] h-10 lg:h-[49px] text-[12px] lg:text-sm font-medium font-Inter border border-[#F1F1F1]">
                    Resume
                </button>


            </div>


        </div>


    </nav>
  )
}

export default Navbar