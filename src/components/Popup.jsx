import React from "react";
import { useDispatch } from "react-redux";
import { closePopup } from "../features/popup/popupSlice";

const Popup = (props) => {
    const dispatch = useDispatch();

  return (
    <div className=" absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10">
      <div className=" w-[30%] relative bg-white rounded-sm border-black p-4 min-h-[40vh] flex justify-center items-center">
        <button onClick={()=>dispatch(closePopup())} className=" text-red-500 font-bold absolute top-1 right-2">X</button>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
