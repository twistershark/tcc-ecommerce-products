import React from "react";

import { Home } from "../../../../presentation/pages/home";
import { MemoryLoadProducts } from "../../../../usecases/load-products/memory-load-products";

export function makeHome() {
  const memoryLoadProducts = new MemoryLoadProducts();

  return <Home loadProducts={memoryLoadProducts} />;
}
