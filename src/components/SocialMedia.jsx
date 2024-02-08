import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex">
      <Link to="https://www.linkedin.com/in/mrityunjay83039/">
        <TiSocialLinkedinCircular className="text-textColor text-2xl cursor-pointer" />
      </Link>
      <Link to="https://github.com/mrityunjay83039">
        <TiSocialGithubCircular className=" text-textColor text-2xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialMedia;
