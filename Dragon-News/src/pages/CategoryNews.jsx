import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const newsData = useLoaderData();
  const { id } = useParams();

  useEffect(()=>{
    document.title = 'DragonNews | Home'
  } ,[])


    let categoryNews = [];

  if (id === "0") {
    categoryNews = newsData;
  } else if (id === "1") {
    const displayNews = newsData.filter((news) => news.others.is_today_pick);
    categoryNews = displayNews;
  } else {
    const displayNews = newsData.filter((news) => news.category_id == id);
    categoryNews = displayNews;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) =>
            <NewsCard key={news.id} news = {news}></NewsCard>
        )}
    </div>
    </div>
  );
};

export default CategoryNews;
