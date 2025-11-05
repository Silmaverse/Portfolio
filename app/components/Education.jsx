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

          <Text variant="h2">Education & Skills </Text>

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

                    <Text variant="h5" className="mt-2.5">
                      Bachelor's degree - Computer Science and Engineering
                    </Text>
                    {/* <Text variant="h6" className="mt-6">2018 - 2023</Text> */}
                  </div>

                  <div className="">
                    <Text variant="h4">Chittagong Model School and College</Text>

                    <Text variant="h5" className="mt-2.5">Science</Text>
                    {/* <Text variant="h6" className="mt-6">2015 - 2017</Text> */}
                  </div>

                  <div className="">
                    <Text variant="h4">
                      Chittagong Govt Girls High School and College
                    </Text>

                    <Text variant="h5" className="mt-2.5">Science</Text>

                    {/* <Text variant="h6" className="mt-6">2006 - 2015</Text> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="right_part">
              <Text variant="p" className="w-[250px] lg:w-[584px] mt-10 lg:mt-0 text-black">For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks,
                and here you can see a summary of my skills.</Text>


              <Text variant="h6" className="mt-16 mb-4" >Github</Text>

              <div className="lg:w-[551px] h-2 bg-linear-to-r from-[rgba(126,116,241,1)] from-0% via-[rgba(245,243,254,1)] via-65% to-[rgba(245,243,254,1)] to-100% rounded-xl"></div>

              <Text variant="h6" className="mt-16 mb-4" >Figma</Text>

              <div className="lg:w-[551px] h-2 bg-linear-to-r from-[rgba(126,116,241,1)] via-[rgba(245,243,254,1)] to-[rgba(245,243,254,1)] rounded-xl"></div>


              <Text variant="h6" className="mt-16 mb-4" >Excel</Text>

              <div className="lg:w-[551px] h-2 bg-linear-to-r from-[rgba(126,116,241,1)] via-[rgba(245,243,254,1)] to-[rgba(245,243,254,1)] rounded-xl"></div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Education;
