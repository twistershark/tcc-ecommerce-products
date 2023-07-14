import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ProductsList from "./components/ProductsList";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <ProductsList />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
