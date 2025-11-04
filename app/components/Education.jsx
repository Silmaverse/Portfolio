import React from "react";
import Text from "@/app/utill/Text";

const Education = () => {
  return (
    <>
      <section id="eductaion" className="mt-[106px]">
        <div className="container">
          <Text variant="h3">
            <Text variant="span">--</Text> LEARNING PATH
          </Text>

          <Text variant="h2">Education</Text>

         <div className="flex-wrap flex justify-between">
        <div className="left_part">

          <div className="flex gap-5   mt-[116px]">
          <div className="flex flex-col  space-y-[150px] relative">
            <div className="absolute w-px h-[350px] top-0 left-2 bg-[#F1F1F1]" />

            <div className="w-4 h-4 rounded-full bg-[#F1F1F1] z-10"></div>

            <div className="w-4 h-4 rounded-full bg-[#F1F1F1]  z-10"></div>

            <div className="w-4 h-4 rounded-full bg-[#F1F1F1] z-10"></div>
          </div>

            <div className="education_name flex flex-col gap-16">
                <div className="">
                <Text variant="h4">Brac university</Text>

                <Text variant="h5" className="mt-[10px]">
                    Bachelor's degree - Computer Science and Engineering
                </Text>
                {/* <Text variant="h6" className="mt-6">2018 - 2023</Text> */}
                </div>

                <div className="">
                <Text variant="h4">Chittagong Model School and College</Text>

                <Text variant="h5" className="mt-[10px]">Science</Text>
                {/* <Text variant="h6" className="mt-6">2015 - 2017</Text> */}
                </div>

                <div className="">
                <Text variant="h4">
                    Chittagong Govt Girls High School and College
                </Text>

                <Text variant="h5" className="mt-[10px]">Science</Text>

                {/* <Text variant="h6" className="mt-6">2006 - 2015</Text> */}
                </div>
            </div>
          </div>
        </div>

          <div className="right_part">
            <Text variant="p" className="w-full lg:w-[584px] mt-10 lg:mt-0">For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, 
                and here you can see a summary of my skills.</Text>
          </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Education;
