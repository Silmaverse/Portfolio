import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Text from "@/app/utill/Text";


const Footer = () => {
  return (
    <>
      <footer className="py-22">
        <div className="container">

          <div className="flex gap-8 justify-center items-center mt-10">
            <FaInstagram className="text-2xl text-primary" />
            <LuGithub className="text-2xl text-primary" />
            <LuTwitter className="text-2xl text-primary" />
            <FiLinkedin className="text-2xl text-primary" />
          </div>
           <Text variant="h5" className ="mt-6 text-center">© 2022  -  DevChapter</Text>


        </div>

      </footer>
    </>
  );
};

export default Footer;
