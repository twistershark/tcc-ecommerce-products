import { Product } from "../../../../domain/entities/product";
import { ProductRepositoryInterface } from "../../../../domain/repositories/product-repository-interface";
import { createRandomProducts } from "../entities/mock-product";

export class MockProductRepository implements ProductRepositoryInterface {
  async loadProducts(): Promise<Product[]> {
    const products = createRandomProducts(20);

    return Promise.resolve(products);
  }

  async searchByName(name: string): Promise<Product[]> {
    const products = createRandomProducts(20);

    return Promise.resolve(
      products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }

  async searchByCategory(category: string): Promise<Product[]> {
    const products = createRandomProducts(20);

    return Promise.resolve(
      products.filter((product) => product.category === category)
    );
  }
}
