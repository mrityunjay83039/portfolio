import React from "react";

export const PrimaryBtn = ({btnwidth, btnText, handleBtn, btnIcon}) => {
  return (
    <button
      onClick={handleBtn}
      className={" bg-textPrimary text-textWhite p-4 "+ btnwidth +" rounded-md flex justify-center gap-2 items-center text-xl"}
    >
     {btnIcon} {btnText}
    </button>
  );
};


export const SecondaryBtn = ({btnwidth, btnText}) => {
    return (
      <button
        className={" bg-bgDefault text-textWhite font-extralight text-sm p-2 "+ btnwidth +" rounded-2xl flex justify-center items-center border-gray border"}
      >
       {btnText}
      </button>
    );
  };
  