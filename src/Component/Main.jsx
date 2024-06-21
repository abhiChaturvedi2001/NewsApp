import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Main = () => {
  const isDarkMode = useSelector((store) => store.toggle.toggle);
  return (
    <>
      <div className="flex items-center justify-center h-[70vh] text-center">
        <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
          <h1 className="text-4xl font-font-poppins font-bold tracking-widest">
            Welcome to our News App 🚀
          </h1>
          <p className="my-4 font-font-poppins ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            adipisci sit consequuntur <br /> rerum ad, cum, accusantium, dolore
            magnam
          </p>
          <Link to={"/latestNews"}>
            {" "}
            <p className="underline capitalize font-font-poppins font-semibold">
              check out latest News &#8594;
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
