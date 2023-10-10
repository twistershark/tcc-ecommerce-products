import { Product } from "../entities/product";

export interface ProductServiceInterface {
  loadProducts(): Promise<Product[]>;
  loadHighlightedProducts(): Promise<Product[]>;
  searchByName(name: string): Promise<Product[]>;
  searchByCategory(category: string): Promise<Product[]>;
}
