import React from "react";
import { SecondaryBtn } from "./Buttons";

const WorkExperience = () => {
  return (
    <div className="min-h-[98vh] flex flex-col justify-center gap-8 relative">
      <h3 className=" text-textWhite text-2xl md:text-[48px] md:leading-[56px] md:text-left mt-8">
        Work Experience
      </h3>
      <ul className="flex flex-col">
        <li className="flex flex-col gap-4 py-8 pl-20 border-l border-gray-400 before:content-[' '] before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:-left-1.5 before:hover:bg-textPrimary">
          <SecondaryBtn btnText="Jul 2022 - Feb 2024" btnwidth="w-44" />

          <p className=" text-textColor">
            Front End Developer - [FCS Software Solutions Ltd.]
          </p>
        </li>
        <li className="flex flex-col gap-4 py-8 pl-20 border-l border-gray-400 before:content-[' '] before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:-left-1.5 before:hover:bg-textPrimary">
          <SecondaryBtn btnText="Apr 2017 - Jul 2022" btnwidth="w-44" />

          <p className=" text-textColor">
            Web Designer - [CodiPixel Services Pvt. Ltd.]
          </p>
        </li>
        <li className="flex flex-col gap-4 py-8 pl-20 border-l border-gray-400 before:content-[' '] before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:-left-1.5 before:hover:bg-textPrimary">
          <SecondaryBtn btnText="Aug 2015 - Dec 2016" btnwidth="w-44" />

          <p className=" text-textColor">
            Web Designer - [Tetra Services Pvt. Ltd.]
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
