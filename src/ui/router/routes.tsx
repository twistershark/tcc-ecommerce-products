import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

import "tailwindcss/tailwind.css";

export default function ProductsListRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
