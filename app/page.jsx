import Image from "next/image";
import Hero from "../app/components/Hero"
import Specialized from "@/app/components/Specialized";
import Portfolio from "@/app/components/Portfolio"
import Experience from  "@/app/components/Experience"

export default function Home() {
  return (
    <>
    <Hero/>
    <Specialized/>
    <Portfolio/>
    <Experience/>
    </>
      


  )
}
