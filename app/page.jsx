import Image from "next/image";
import Hero from "../app/components/Hero"
import Specialized from "@/app/components/Specialized";
import Portfolio from "@/app/components/Portfolio"
import Experience from  "@/app/components/Experience";
import Techstack from "@/app/components/Techstack"
import Education from "@/app/components/Education"
import ContactMe from "@/app/components/ContactMe"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <>
    <Hero/>
    <Specialized/>
    <Techstack/>
    <Portfolio/>
    <Experience/>
    <Education/>
    <ContactMe/>
    <Footer/>
    </>
      


  )
}
