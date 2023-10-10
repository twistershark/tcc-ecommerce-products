import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductsListRoutes from "./router/routes";

import "./index.css";

const root = createRoot(document.getElementById("app")!);
root.render(
  <BrowserRouter>
    <ProductsListRoutes />
  </BrowserRouter>
);
