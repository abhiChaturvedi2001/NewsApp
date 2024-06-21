import React, { useState } from "react";
import { buttonList } from "../utils/constant";
import useNewsApi from "../utils/useNewsApi";
import NewsCards from "./NewsCards";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const NewsArea = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPagePost, setperPagePost] = useState(8);
  const [category, setCategory] = useState("business");
  const handleCategoryNews = (buttonCategory) => {
    setCategory(buttonCategory);
  };
  const { newsData } = useNewsApi(category);
  const lastPostIndex = currentPage * perPagePost;
  const firtPostIndex = lastPostIndex - perPagePost;
  const currentPost = newsData.slice(firtPostIndex, lastPostIndex);

  return (
    <>
      <div className="min-h-[100vh] h-auto py-5">
        <h1 className="font-font-poppins text-5xl ml-5 mt-5">Latest News</h1>
        <div className="mt-8">
          {buttonList.map((btn) => {
            const { id, buttonName } = btn;
            return (
              <>
                <button
                  onClick={() => handleCategoryNews(buttonName)}
                  className="ml-3 border border-black capitalize font-font-poppins cursor-pointer px-3 rounded-3xl w-[9rem] py-1 hover:bg-black hover:text-white"
                  key={id}
                >
                  {buttonName}
                </button>
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center mt-[50px] gap-y-5 ">
          {newsData.length === 0 ? <h1>loading....</h1> : currentPost.map((items) => {
            return (
              <Link
                to={`/latestNews/${items?.source?.name}`}
                state={{ category }}
              >
                <NewsCards items={items} />
              </Link>
            );
          })}
        </div>
        <Pagination
          className="mt-5"
          totalPosts={newsData.length}
          setCurrentPage={setCurrentPage}
          perPagePost={perPagePost}
        />
      </div>
    </>
  );
};

export default NewsArea;
