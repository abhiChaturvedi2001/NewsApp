import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useNewsApi from "../utils/useNewsApi";
import { Link } from "react-router-dom";

const SingleNews = () => {
  const location = useLocation();
  const [filterData, setFilterData] = useState([]);
  const { name } = useParams();
  const { category } = location.state || {};
  const { newsData } = useNewsApi(category);

  useEffect(() => {
    const data = newsData.filter((items) => {
      if (items.source.name === name) {
        return items;
      }
    });
    setFilterData(data);
  }, [newsData]);

  return filterData.length === 0 ? (
    <h1>loading....</h1>
  ) : (
    <>
      <div className="w-[50%] mx-auto mt-[50px] min-h-[100vh] h-auto">
        {filterData.map((items) => {
          const { urlToImage, title, description, url } = items;
          return (
            <>
              <div className="w-[50vw] mt-8">
                <h1 className="text-4xl font-font-poppins">{title}</h1>
                <img className="my-5" src={urlToImage} alt="" />
                <p className="font-font-poppins">{description}</p>
                <a href={`${url}`} target="__blank">
                  {" "}
                  <p className="my-3 font-bold font-font-poppins hover:underline">
                    Check out the Original Article &#8594;
                  </p>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleNews;
