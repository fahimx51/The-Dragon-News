import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  return (
    <div className="border-1 rounded-lg border-base-200 flex flex-col gap-10 shadow-sm">
      <div className="h-20 bg-base-200 rounded-tr-lg rounded-tl-lg flex items-center justify-between">
        <div className="flex gap-5 items-center ml-10">
          <div>
            <img
              className="h-15 w-15 rounded-full"
              src={news.author.img}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{news.author.name}</h3>
            <p className="text-accent">
              {news.author.published_date.slice(0, 10)}
            </p>
          </div>
        </div>

        <div className="flex text-4xl gap-3 mr-10">
          <CiBookmark className="text-accent btn border-0 p-0"></CiBookmark>
          <CiShare2 className="text-accent btn border-0 p-0"></CiShare2>
        </div>
      </div>

      <div className="mx-10">
        <h1 className="text-3xl font-semibold text-primary mb-10">
          {news.title}
        </h1>
        <img
          className="w-full max-h-90 object-cover object-center mb-10 rounded-lg"
          src={news.image_url}
          alt=""
        />
        <section className="mb-10">
          <p className="text-primary text-lg inline">
            {news.details.slice(0, 200)} . . .
          </p>

          <p className="btn border-0 p-0 bg-transparent text-secondary text-lg mb-5 inline ml-2">
            <Link to={`/news/${news.id}`}> Read More</Link>
          </p>
        </section>

        <p className="border-t border-base-300 mb-5"></p>

        <div className="mb-5 flex justify-between">
          <div className="flex gap-2 text-xl items-center text-orange-400">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <p className="text-accent">{news.rating.number}</p>
          </div>

          <div className="flex items-center gap-3 text-accent text-xl">
            <FaEye></FaEye>
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
