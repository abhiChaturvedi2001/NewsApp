import React from "react";

const Pagination = ({ totalPosts, perPagePost, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPagePost); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="flex items-center justify-center h-[20vh]">
        {pages.map((page, index) => {
          return (
            <button
              className="border hover:bg-black hover:text-white border-black w-[3rem]  px-2 py-1 ml-2"
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
