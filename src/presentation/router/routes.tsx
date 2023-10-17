import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

import "tailwindcss/tailwind.css";
import { Products } from "../pages/products";

export default function ProductsListRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
    </Routes>
  );
}
