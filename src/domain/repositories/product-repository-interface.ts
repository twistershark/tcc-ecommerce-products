import { Product } from "../../domain/entities/product";

export interface ProductRepositoryInterface {
  loadProducts(): Promise<Product[]>;
  searchByName(name: string): Promise<Product[]>;
  searchByCategory(category: string): Promise<Product[]>;
}
