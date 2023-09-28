import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Components/Profile";
import Wishlist from "../Pages/Wishlist";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default AllRoutes;
