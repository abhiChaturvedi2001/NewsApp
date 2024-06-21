import React from "react";
import Header from "./Header";

const Body = ({ isDarkMode, setisDarkMode }) => {
  return (
    <>
      <Header isDarkMode={isDarkMode} setisDarkMode={setisDarkMode} />
    </>
  );
};

export default Body;
