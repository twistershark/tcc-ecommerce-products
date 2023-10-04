import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { makeHome } from "./main/factories/pages/home/home-factory";

const App = () => {
  return <BrowserRouter>{makeHome()}</BrowserRouter>;
};

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
