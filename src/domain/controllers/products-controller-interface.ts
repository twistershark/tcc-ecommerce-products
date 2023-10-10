import { Product } from "../entities/product";

export interface ProductsControllerInterface {
  loadProducts(): Promise<Product[]>;
  loadHighlightedProducts(): Promise<Product[]>;
  searchProductsByName(name: string): Promise<Product[]>;
  searchProductsByCategory(category: string): Promise<Product[]>;
}
