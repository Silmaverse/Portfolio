import React from "react";
import CommonButton from "@/app/utill/CommnonButton";
import Text from "@/app/utill/Text";

const Experience = () => {
  return (
    <>
      <section id="experience" className=" mt-44 bg-[#FBFBFB] py-[104px]">
        <div className="container">

          <Text variant="h3" ><Text variant="span">--</Text> Career path</Text>

          <Text variant="h2">
           
            Work Experices
          </Text>

          <div className="flex flex-wrap gap-[137px] items-center">
            <div className="w-[281px] mt-20 left-part">
              <CommonButton CompanyName={"Creative It"} />
              <CommonButton CompanyName={"NextZenIt"} />
              <CommonButton CompanyName={"TimeDoor Acadmey"} />
              
            </div>

            <div className="right_part">
              <h2 className="text-[18px] font-Jakatra font-medium text-primary">
                Front-end Developer Apple .Inc
              </h2>
              <p className="text-sm font-Inter font-normal text-heroname mt-2 ">
                California, United States
              </p>
              <p className="text-sm font-Inter font-normal text-heroname mt-4">
                Nov 2020 - Present · Full-time
              </p>

              <div className="flex gap-4 items-center mt-4">
                <div className="inline py-1 px-2  border border-[#F1F1F1] rounded-sm text-[12px] text-heroname font-Inter font-medium">
                  Swift
                </div>

                <div className="inline py-1 px-2  border border-[#F1F1F1] rounded-sm text-[12px] text-heroname font-Inter font-medium">
                  Go
                </div>
              </div>

              <div className="border border-[#F1F1F1] mt-8 w-[779px]"></div>

              <div className="mt-8">
                <Text variant={"p"} className="w-[250px]  mt-3 lg:mt-0">
                  - Improving overall website performance for mobile users.
                </Text>
                <Text variant={"p"} className="w-[250px] mt-3 lg:mt-0">
                  - Collaborate with back-end developers and web designers to
                  improve usability
                </Text>
                <Text variant={"p"} className="w-[250px] mt-3 lg:mt-0">
                  - Add voice search feature for mobile app.
                </Text>
                <Text variant={"p"} className="w-[250px] mt-3 lg:mt-0">
                  - Developing an admin panel to manage contents, users,
                  products and ...
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
