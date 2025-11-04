import React from 'react'
import { MdChevronRight } from 'react-icons/md'

const CommnonButton = ({CompanyName}) => {
  return (
    <>
       <button className='w-full h-[52px] px-8 hover:bg-white text-base font-Inter font-medium  text-primary
               hover:text-brand flex items-center justify-between group'> {CompanyName}  
               <MdChevronRight className='text-transparent group-hover:text-brand' /> </button>
    </>
  )
}

export default CommnonButton