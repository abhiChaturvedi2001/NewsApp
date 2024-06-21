import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleTrue, handleToggleFalse } from "../utils/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.toggle.toggle);
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
              onClick={() => dispatch(handleToggleFalse())}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <MdDarkMode
              onClick={() => dispatch(handleToggleTrue())}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
