import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const newsData = data.find((singleData) => singleData.id == id);

  useEffect(() => {
    window.scrollTo(0, 200);
  }, [id]);

  return (
    <div className="border-1 border-base-200 rounded-md p-5 m-10 shadow-sm">
      <img
        onError={(e) => {
          e.target.src =
            "https://images.pexels.com/photos/7412640/pexels-photo-7412640.jpeg";
          e.target.className = "w-full rounded-md mb-5";
        }}
        className="w-full rounded-md mb-5"
        src={newsData.image_url}
        alt=""
      />
      <h1 className="text-3xl font-semibold text-primary mb-5">
        {newsData.title}
      </h1>
      <p className="text-lg text-accent mb-10">{newsData.details}</p>

      <Link to="/">
        <button className="btn btn-secondary w-80 h-15 flex justify-between text-xl">
          <FaArrowLeft></FaArrowLeft>
          All news in this category
        </button>
      </Link>
    </div>
  );
};

export default NewsDetails;
