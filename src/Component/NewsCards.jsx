import React from "react";

const NewsCards = ({ items }) => {
  const { urlToImage, title, description, publishedAt, author } = items;
  
  // function to convert timestamp to hours
  function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInMs = now - past;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    return `${Math.floor(diffInHours / 1000)} h ago`;
  }

  return (
    <>
      <div className="w-[20vw] max-lg:w-[15rem] px-3 py-3 hover:shadow-lg cursor-pointer">
        <img className="w-full  object-cover" src={urlToImage} alt="" />
        <div>
          <h1 className="font-bold font-font-poppins my-3">{title}</h1>
          <p className="font-font-poppins">
            {description.slice(0, 60)}....{" "}
            <span className="ml-2 font-bold ">{timeAgo(publishedAt)}</span>{" "}
          </p>
          <p className="my-3"></p>
          <div>
            <p className="font-font-poppins">
              Author : <span className="font-bold">{author}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCards;
