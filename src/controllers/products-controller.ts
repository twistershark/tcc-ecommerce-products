import { MemoryProductsRepository } from "../repositories/memory-products-repository";
import { ProductService } from "../application/services/products-service";
import { ProductsControllerInterface } from "../domain/controllers/products-controller-interface";
import { ProductServiceInterface } from "../domain/services/products-service-interface";

class ProductsController implements ProductsControllerInterface {
  private productsService: ProductServiceInterface;

  constructor() {
    this.productsService = new ProductService(new MemoryProductsRepository());
  }

  async loadProducts() {
    const products = await this.productsService.loadProducts();
    return products;
  }

  async loadHighlightedProducts() {
    const products = await this.productsService.loadHighlightedProducts();

    return products;
  }

  async searchProductsByName(name: string) {
    const productsResult = await this.productsService.searchByName(name);

    return productsResult;
  }

  async searchProductsByCategory(category: string) {
    const productsResult = await this.productsService.searchByCategory(
      category
    );

    return productsResult;
  }
}

export default new ProductsController();
