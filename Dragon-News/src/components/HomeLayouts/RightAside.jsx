import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "../FindUs";
import Qzone from "../Qzone";

const RightAside = () => {
  return (
    <div className="flex flex-col gap-10">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
