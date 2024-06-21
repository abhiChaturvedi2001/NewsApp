import React from "react";

const Pagination = ({ totalPosts, perPagePost, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPagePost); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="mx-auto w-[40%]">
        {pages.map((page, index) => {
          return (
            <button
              className="border border-black  px-2 py-1 ml-2"
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
