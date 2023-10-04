import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../domain/models/product";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link to={`/produto/${product.id}`} key={product.id}>
      <div className="pl-group pl-relative pl-shadow-lg pl-rounded-lg pl-p-4">
        <div className="pl-aspect-h-1 pl-aspect-w-1 pl-w-full overflow-hidden pl-rounded-md pl-bg-gray-200 pl-lg:aspect-none group-hover:pl-opacity-75 lg:pl-h-80">
          <img
            src={product.image}
            alt={product.name}
            className="pl-h-full pl-w-full pl-object-cover pl-object-center lg:pl-h-full lg:pl-w-full"
          />
        </div>
        <div className="pl-mt-4 pl-flex pl-justify-between">
          <div>
            <h3 className="pl-text-sm pl-text-gray-700">
              <span>{product.name}</span>
            </h3>
            <p className="pl-mt-1 pl-text-sm pl-text-gray-500">
              {product.color}
            </p>
          </div>
          <p className="pl-text-sm pl-font-medium pl-text-gray-900">
            R$ {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
