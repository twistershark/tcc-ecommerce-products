import { Category, Product } from "../../../../domain/entities/product";
import { ProductServiceInterface } from "../../../../domain/services/products-service-interface";
import { MockProductRepository } from "../repositories/mock-product-repository";

export class MockProductsService implements ProductServiceInterface {
  productRepository = new MockProductRepository();

  async loadProducts() {
    return this.productRepository.loadProducts();
  }

  async loadHighlightedProducts(): Promise<Product[]> {
    const products = await this.productRepository.loadProducts();

    const tempProducts = [...products];
    const randomProducts = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * tempProducts.length);

      randomProducts.push(tempProducts[randomIndex]);

      tempProducts.splice(randomIndex, 1);
    }

    return randomProducts;
  }
  async searchByName(name: string) {
    return this.productRepository.searchByName(name);
  }

  async searchByCategory(category: Category) {
    return this.productRepository.searchByCategory(category);
  }
}
