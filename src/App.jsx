import React, { useState } from "react";
import Body from "./Component/Body";
import NewsArea from "./Component/NewsArea";
import Main from "./Component/Main";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SingleNews from "./Component/SingleNews";
import { useSelector } from "react-redux";

const App = () => {
  const isDarkMode = useSelector((store) => store.toggle.toggle);
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-[#0f172a]" : "bg-[#f2e9da]"
        } min-h-[100vh] h-auto`}
      >
        <Body />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/latestNews",
        element: <NewsArea />,
      },
      {
        path: "/latestNews/:name",
        element: <SingleNews />,
      },
    ],
  },
]);

export default App;
