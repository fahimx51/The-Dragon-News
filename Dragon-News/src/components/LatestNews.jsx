import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <h1 className="bg-secondary p-3 text-white font-semibold px-5">Latest</h1>

      <Marquee
        className="flex gap-10"
        pauseOnHover={true}
        speed={100}
      >
        <p className="font-semibold mr-10">
          Lorem ipsum dolor sit amet, 
        </p>
        <p className="font-semibold mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt doloribus provident consequuntur ipsam beatae atque nulla. Similique, est reprehenderit?
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet last. 
        </p>

      </Marquee>

    </div>
  );
};

export default LatestNews;
