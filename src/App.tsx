import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { ProductsList } from "./components/products-list";

const App = () => {
  return <ProductsList />;
};

ReactDOM.render(<App />, document.getElementById("app"));
