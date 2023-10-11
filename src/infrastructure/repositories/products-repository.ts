import { Category, Product } from "../../domain/entities/product";
import { ProductRepositoryInterface } from "../../domain/repositories/product-repository-interface";
import { ProductAdapterInterface } from "../adapters/product-adapter-interface";

export class ProductsRepository implements ProductRepositoryInterface {
  private productAdapter: ProductAdapterInterface;

  constructor(productAdapter: ProductAdapterInterface) {
    this.productAdapter = productAdapter;
  }

  async loadProducts(): Promise<Product[]> {
    const products = await this.productAdapter.get();
    return products;
  }

  async searchByName(name: string): Promise<Product[]> {
    const products = await this.productAdapter.get({ name });
    return products;
  }

  async searchByCategory(category: Category): Promise<Product[]> {
    const products = await this.productAdapter.get({ category });
    return products;
  }
}
