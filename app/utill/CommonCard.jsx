import React from "react";
import Image from "next/image";
const CommonCard = ({spicon , title , description}) => {
  return (
    <>
      <div className="first_card w-[361px] px-[57px] py-[53px] bg-white flex flex-col gap-4 justify-center items-center rounded-lg">
        <div className=" w-14 h-14  rounded-2xl bg-trinary flex justify-center items-center">
          <div className="image w-6 h-6 relative">
            <Image src={spicon} alt="error" fill={true} />
          </div>
        </div>

        <h2 className="text-base font-Jakatra font-medium text-primary  text-center">
          {title}
        </h2>

        <p className=" W-[247px] text-center text-sm font-Inter font-normal text-primary">
         {description}
        </p>
      </div>
    </>
  );
};

export default CommonCard;
