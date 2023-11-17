import React, { KeyboardEvent, useEffect, useState } from "react";

import { Category, Product } from "../../../domain/entities/product";
import { ProductItem } from "../../components/product-item";
import productsController from "../../controllers/products-controller";
import { Button } from "../../components/button";
import { categoriesOptions } from "./constants/categories-options";

import "tailwindcss/tailwind.css";

export default function Products() {
  const [products, setProducts] = useState([] as Product[]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [search, setSearch] = useState<string>("");

  async function handleLoadProducts() {
    const loadedProducts = await productsController.loadProducts();
    setProducts(loadedProducts);
  }

  async function handleFilterByName() {
    setSelectedCategory(null);
    const filteredProducts = await productsController.searchProductsByName(
      search
    );
    setProducts(filteredProducts);
  }

  async function handleFilterByCategory(category: Category) {
    if (category === selectedCategory) {
      return handleResetFilters();
    }

    setSelectedCategory(category);
    setSearch("");

    const filteredProducts = await productsController.searchProductsByCategory(
      category
    );

    setProducts(filteredProducts);
  }

  async function handleResetFilters() {
    setSearch("");
    setSelectedCategory(null);
    handleLoadProducts();
  }

  function handleInputKeyDown({ code }: KeyboardEvent<HTMLInputElement>) {
    if (code === "Enter") handleFilterByName();
  }

  useEffect(() => {
    if (!search) handleLoadProducts();
  }, [search]);

  return (
    <div className="pl-mx-auto pl-max-w-2xl sm:pl-px-6 sm:pl-py-24 lg:pl-max-w-7xl lg:pl-px-0 lg:pl-py-8 pl-flex pl-flex-col pl-items-center pl-gap-10">
      <div className="pl-w-full pl-flex pl-items-center">
        <input
          placeholder="Camiseta branca"
          className="pl-flex-1 pl-border pl-border-solid pl-border-[#CCC] pl-h-[46px] pl-py-4 pl-px-5 pl-font-sans pl-font-medium pl-placeholder-[#CCC]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleInputKeyDown}
          data-testid="search-input"
        />
        <Button
          className="pl-max-w-[253px]"
          onClick={() => handleFilterByName()}
          data-testid="search-button"
        >
          Buscar
        </Button>
      </div>
      <div className="pl-w-full pl-flex pl-flex-col pl-gap-5">
        <h2 className="pl-text-black pl-font-serif pl-text-xl pl-font-bold pl-text-left">
          Filtrar por categoria:
        </h2>
        <div className="pl-flex pl-items-center pl-gap-4 pl-justify-between">
          {categoriesOptions.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "full" : "outline"}
              onClick={() => handleFilterByCategory(category.value)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="pl-h-[1px] pl-w-full pl-bg-[#CCC]" />

      <h3 className="pl-text-black pl-font-serif pl-text-lg pl-font-bold pl-text-center">
        PRODUTOS
      </h3>
      <div className="pl-mt-6 pl-grid pl-grid-cols-1 pl-gap-x-6 pl-gap-y-10 sm:pl-grid-cols-2 lg:pl-grid-cols-4 xl:pl-gap-x-8">
        {products.length ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <h3 className="pl-text-[#8a8a8a] pl-font-serif pl-text-2xl pl-font-bold pl-text-center pl-col-span-full">
            Nenhum produto encontrado!
          </h3>
        )}
      </div>
    </div>
  );
}
