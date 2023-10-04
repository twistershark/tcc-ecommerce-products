import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../../../domain/models/product";
import { LoadProducts } from "../../../domain/usecases/load-products";
import { ProductItem } from "../../components/product-item";

import "tailwindcss/tailwind.css";

interface HomeProps {
  loadProducts: LoadProducts;
}

export function Home({ loadProducts }: HomeProps) {
  const [products, setProducts] = useState([] as Product[]);

  async function handleLoadProducts() {
    const loadedProducts = await loadProducts.load();
    setProducts(loadedProducts);
  }

  useEffect(() => {
    handleLoadProducts();
  }, []);

  return (
    <div className="pl-mx-auto pl-max-w-2xl sm:pl-px-6 sm:pl-py-24 lg:pl-max-w-7xl lg:pl-px-0 lg:pl-py-4">
      <h2 className="pl-text-3xl pl-font-bold pl-tracking-tight pl-text-gray-900 pl-text-center pl-mb-4">
        Mais vendidos
      </h2>

      <div className="pl-mt-6 pl-grid pl-grid-cols-1 pl-gap-x-6 pl-gap-y-10 sm:pl-grid-cols-2 lg:pl-grid-cols-4 xl:pl-gap-x-8">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
}
