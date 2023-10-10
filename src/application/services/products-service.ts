import { ProductRepositoryInterface } from "../../domain/repositories/product-repository-interface";
import { ProductServiceInterface } from "../../domain/services/products-service-interface";

export class ProductService implements ProductServiceInterface {
  private repository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.repository = productRepository;
  }

  async loadProducts() {
    const products = await this.repository.loadProducts();
    return products;
  }

  async loadHighlightedProducts() {
    const products = await this.repository.loadProducts();

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
    const productsResult = await this.repository.searchByName(name);

    return productsResult;
  }

  async searchByCategory(category: string) {
    const productsResult = await this.repository.searchByCategory(category);

    return productsResult;
  }
}
