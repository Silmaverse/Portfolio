import React from 'react'

const Text = ({variant = 'p' , children , className=""}) => {

  const variants =[
    {
        name: "h2" , tag:"h2" , className:"text-4xl font-Jakatra font-bold text-primary mt-2"
    },
    {
        name: "h3" , tag:"h3" , className:"text-[12px] font-Inter font-medium text-heroname "
    },
     {
        name: "h4" , tag:"h4" , className:"text-base font-Jakatra font-medium text-primary "
    },
     {
        name: "h5" , tag:"h5" , className:"text-sm font-Inter font-normal text-heroname "
    },

     {
        name: "h6" , tag:"h6" , className:"text-sm font-Inter font-medium text-primary"
    },
    {
        name:"p" ,tag:"p" ,className:"text-sm lg:text-base font-Inter font-normal text-secondary"
    },
     {
        name:"span" ,tag:"span" ,className:"inline-block w-4 h-0.5 text-sside"
    }
  ]

  const selectedvariant = variants.find((v)=> v.name === variant ) || variants.find((v)=> v.name === 'p')

  const Component =selectedvariant.tag

  return (
    <>
      <Component className={`${selectedvariant.className} ${className} `} >
        {children}
      </Component>
    </>
  )
}

export default Text;