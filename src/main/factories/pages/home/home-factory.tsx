import React from "react";
import { MemoryLoadProducts } from "../../../../data/usecases/load-products/memory-load-products";
import { Home } from "../../../../presentation/pages/home";

export function makeHome() {
  const memoryLoadProducts = new MemoryLoadProducts();

  return <Home loadProducts={memoryLoadProducts} />;
}
