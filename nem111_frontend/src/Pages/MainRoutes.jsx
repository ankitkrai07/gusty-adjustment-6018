import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const MainRoutes = () => {
  const PageRoutes = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: <h1>404 Page Not Found</h1>,
    },
  ];

  return (
    <Routes>
      {PageRoutes.map((ele, key) => (
        <Route
          key={key}
          path={ele.path}
          element={
            <>
              <Navbar /> {ele.element} <Footer />
            </>
          }
        />
      ))}
    </Routes>
  );
};
