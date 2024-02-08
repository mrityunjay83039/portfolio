import React from "react";
import profilePic from "../assets/img/profile_pic.jpg";
import {SocialMedia} from './';

const ProfileCard = () => {
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
      <SocialMedia/>
    </>
  );
};

export default ProfileCard;
