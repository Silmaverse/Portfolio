import React from "react";
import Image from "next/image";
import CommonCard from "@/app/utill/CommonCard";
import Address from "@/public/pin.svg";
import phone from "@/public/phone call.svg";
import email from "@/public/mail.svg";
import Text from "@/app/utill/Text";

const ContactMe = () => {
  return (
    <>
      <section id="contactme" className=" mt-44 bg-[#FBFBFB] py-[104px]">
        <div className="container">
          <div className="contact_row flex-wrap flex justify-between items-center">


            <div className="left_parrt w-[600px]">
              <input
                className="w-full py-4 pl-6 bg-white border-none outline-none text-sm font-normal font-Inter"
                placeholder="Name"
              ></input>

              <input
                className="w-full py-4 pl-6 bg-white mt-4 mb-6 border-none outline-none text-sm font-normal font-Inter"
                placeholder="Email"
              ></input>
              <textarea
                className="w-full h-[189px] pt-4 pl-6 bg-white mt-4 mb-6 border-none outline-none text-sm font-normal font-Inter"
                placeholder="Message"
              ></textarea>
              <button
                className="w-full h-[49px] bg-brand font-medium font-Inter text-sm text-white
                rounded-lg"
              >
                Send Message
              </button>
            </div>



            <div className="right_part mt-10 lg:mt-0">
             <div className="flex gap-6">

              <div className="icon flex flex-col gap-12">

                <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">
                  <div className="image w-6 h-6 relative">
                    <Image src={Address} alt="error" fill={true} />
                  </div>
                </div>

                <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">
                  <div className="image w-6 h-6 relative">
                    <Image src={phone} alt="error" fill={true} />
                  </div>
                </div>

                <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">
                  <div className="image w-6 h-6 relative">
                    <Image src={email} alt="error" fill={true} />
                  </div>
                </div>


              </div>
                <div className="text flex flex-col gap-12 ">
                  <div className="text1">
                    <Text variant="p">Address</Text>
                    <Text variant="h5" className="mt-1">
                      3424 Layman Avenue, Fayetteville, NC
                    </Text>
                  </div>

                  <div className="text2">
                    <Text variant="p">Phone</Text>
                    <Text variant="h5" className="mt-1">
                      (501) 414-1541
                    </Text>
                  </div>

                  <div className="text3">
                    <Text variant="p">E-Mail</Text>
                    <Text variant="h5" className="mt-1">
                      devchapter@gmail.com
                    </Text>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default ContactMe;
