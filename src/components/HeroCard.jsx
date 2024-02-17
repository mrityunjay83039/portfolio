import React from "react";
import { SecondaryBtn } from "./Buttons";

const HeroCard = () => {
  return (
    <div className=" flex flex-col gap-8 justify-center mt-6 py-8 px-4 md:min-h-[90vh] min-h-[250px]">

      <SecondaryBtn btnText="INTRODUCE" btnwidth="w-40"></SecondaryBtn>

      <h1 className=" text-textWhite text-2xl md:text-[78px] md:leading-[86px] md:text-left mt-8">
        Say Hi from <span className=" text-textPrimary">Mrityunjay</span>, Frontend Developer
      </h1>
      <p className=" text-textColor">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
    </div>
  );
};

export default HeroCard;
