import React, { useEffect, useState } from "react";
import { ProductItem } from "../../../../components/product-item";
import { Product } from "../../../../../domain/entities/product";
import productsController from "../../../../controllers/products-controller";

export function HighlightProducts() {
  const [highlightProducts, setHighlightProducts] = useState<Product[]>([]);

  async function loadHighlightProducts() {
    const products = await productsController.loadHighlightedProducts();

    setHighlightProducts(products);
  }

  useEffect(() => {
    loadHighlightProducts();
  }, []);

  return (
    <div>
      <h3 className="pl-text-black pl-font-serif pl-text-lg pl-font-bold pl-text-center">
        DESTAQUES
      </h3>

      <div className="pl-mt-6 pl-grid pl-grid-cols-1 pl-gap-x-6 pl-gap-y-10 sm:pl-grid-cols-2 lg:pl-grid-cols-4 xl:pl-gap-x-8">
        {highlightProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
