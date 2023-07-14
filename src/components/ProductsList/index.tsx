import React from "react";
import { Link } from "react-router-dom";

import { Product } from "./types";
import PRODUCTS from "./constants";

import "../../index.scss";

export default function ProductsList() {
  return (
    <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0 lg:py-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-4">
        Mais vendidos
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {PRODUCTS.map((product: Product) => (
          <Link to={`/produto/${product.id}`} key={product.id}>
            <div className="group relative shadow-lg rounded-lg p-4">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span>{product.name}</span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  R$ {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
