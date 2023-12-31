import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import SingleProperty from "./SingleProperty";
import Calculator from "./Calculator";
import Payment from "./Payment";
import { WishlistItem } from "./WishlistItem";
import { BuyProperty } from "./BuyProperty/buyProperty";
import LoginAsAdmin from "./LoginAsAdmin";
import RegisterAdmin from "./RegisterAdmin";
import Admin from "./Admin";


export const MainRoutes = () => {
  const PageRoutes = [
    { path: "/", element: <Homepage /> },

    { path: "/login", element: <Login /> },

    { path: "/signup", element: <Signup /> },

    { path: "/admin", element: <Admin /> },

    { path: "/adminLogin", element: <LoginAsAdmin /> },

    { path: "/adminRegister", element: <RegisterAdmin /> },

    { path: "/profile", element: <Profile /> },

    { path: "/buyproduct", element: <BuyProperty /> },

    { path: "/buyproduct/:id", element: <SingleProperty /> },

    { path: "/wishlist", element: <WishlistItem /> },
    { path: "/calculator", element: <Calculator /> },

    { path: "/payment", element: <Payment /> },

    { path: "*", element: <h1>404 Page Not Found</h1> },
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
