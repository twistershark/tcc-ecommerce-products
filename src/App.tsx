import React from "react";
import ReactDOM from "react-dom";

import ProductsList from "./components/ProductsList";

import "./index.scss";

const App = () => {
  return <ProductsList />;
};

ReactDOM.render(<App />, document.getElementById("app"));
