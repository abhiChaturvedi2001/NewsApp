import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ isDarkMode, setisDarkMode }) => {
  return (
    <>
      <nav
        className={`flex items-center justify-between px-8 min-h-[10vh] font-font-poppins ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center space-x-5">
          <HiOutlineBars3 className="text-2xl cursor-pointer" />
          <ul className="flex items-center space-x-5">
            <Link to={"/"}>
              {" "}
              <li>Home</li>
            </Link>
            <Link to={"/latestNews"}>
              <li>Latest News</li>
            </Link>
          </ul>
        </div>
        <div>
          {isDarkMode ? (
            <MdOutlineLightMode
              onClick={() => setisDarkMode(false)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <MdDarkMode
              onClick={() => setisDarkMode(true)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
