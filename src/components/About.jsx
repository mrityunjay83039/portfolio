import React from "react";
import { SecondaryBtn } from "./Buttons";

const About = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center gap-8">

        <SecondaryBtn btnText="ABOUT" btnwidth="w-32"></SecondaryBtn>

      <h2 className=" text-textWhite text-2xl md:text-[48px] md:leading-[56px] md:text-left mt-8">
        Every great design begin with an even
        <span className=" text-textPrimary">better story</span>
      </h2>
      <p className="text-textColor md:leading-[1.7rem]">
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </p>
    </div>
  );
};

export default About;
