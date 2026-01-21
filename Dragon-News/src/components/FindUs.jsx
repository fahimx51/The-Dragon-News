import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5 font-semibold text-primary">
        Find Us On
      </h1>
      <div className="join join-vertical w-full">
        <button className="btn join-item bg-base-100 hover:bg-base-200 h-12">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item bg-base-100 hover:bg-base-200 h-12">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item bg-base-100 hover:bg-base-200 h-12">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
