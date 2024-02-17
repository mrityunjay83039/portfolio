import React, { useState } from "react";
import profilePic from "../assets/img/profile_pic.jpg";
import { SocialMedia } from "./";
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../features/popup/popupSlice";
import {PrimaryBtn} from './Buttons';

const ProfileCard = () => {

  const dispatch = useDispatch();

  return (
    <>
      <img
        src={profilePic}
        className=" rounded-md sm:w-[100%] md:w-[80%] outline-dashed p-2 outline-textColor"
        alt="Profile Picture"
        title="Profile Picture"
      />
      <h1 className="text-textWhite">Mrityunjay Kumar Mishra</h1>
      <h2 className=" text-textWhite">Frontend Developer @ FCS </h2>
      <SocialMedia />
      <PrimaryBtn btnwidth="w-[70%]" btnText="Hire Me!" handleBtn={()=>dispatch(showPopup())} btnIcon={<MdOutlineEmail />}/>
     
    </>
  );
};

export default ProfileCard;
