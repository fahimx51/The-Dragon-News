import React from "react";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const newsData = data.find((singleData) => singleData.id == id);

  console.log(newsData);

  return (
    <div className="border-1 border-base-200 rounded-md p-5 m-10 shadow-sm">
      <img className="w-full rounded-md mb-5" src={newsData.image_url} alt="" />
      <h1 className="text-3xl font-semibold text-primary mb-5">{newsData.title}</h1>
      <p className="text-lg text-accent">
        {newsData.details}
      </p>
    </div>
  );
};

export default NewsDetails;
