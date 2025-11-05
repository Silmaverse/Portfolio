'use client'
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import hero from "@/public/Hero Image.png";
import back from "@/public/back.png";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <section id="hero" className="mt-[151px]">
        <div className="container">
          <div className="hero_row flex flex-wrap justify-between items-center">
            <div className="left_part">
              <h2 className="text-[12px] font-Inter font-medium text-heroname">
                -- MY NAME IS
              </h2>

              <h2 className="text-2xl lg:text-[44px] font-Jakatra font-bold text-primary mt-4">
                Silma <span className="text-brand"> Subah.

                  <Typewriter
                    options={{

                      autoStart: true,
                      loop: true,
                    }}

                    onInit={(typewriter) => {
                      typewriter
                       
                        .pauseFor(100)
                        .typeString('<span class="text-primary"> A  </span> <span class="text-brand">Frontend Developer</span>')
                        .pauseFor(500)
                        .deleteAll()
                        .typeString('<span class="text-primary"> A pasionate </span> <span class="text-brand">Frontend Developer</span>')
                        .pauseFor(500)
                        .deleteAll()
                        .start()
                    }}
                  />

                </span>
              </h2>





              <p className="w-full lg:w-[538px] text-base font-Inter font-medium text-primary mt-8">
                Creative front-end developer in enterprise companies and
                startups. Proficient in JavaScript, NextJs, and React.
                Passionate about UI/UX
              </p>

              <div className="flex gap-8 items-center mt-10">
                <FaInstagram className="text-2xl text-primary" />
                <LuGithub className="text-2xl text-primary" />
                <LuTwitter className="text-2xl text-primary" />
                <FiLinkedin className="text-2xl text-primary" />
              </div>
            </div>

            <div className="mt-10 lg:mt-0 right_part w-[320px] lg:w-[545px] h-100 lg:h-[496px]  relative ">
              <Image
                src={hero}
                alt="hero_err"
                fill={true}

              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
