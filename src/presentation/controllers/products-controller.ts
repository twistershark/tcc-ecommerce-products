import { ProductService } from "../../application/services/products-service";
import { ProductsControllerInterface } from "../../domain/controllers/products-controller-interface";
import { Product } from "../../domain/entities/product";
import { ProductServiceInterface } from "../../domain/services/products-service-interface";
import { ProductAdapter } from "../../infrastructure/adapters/product-adapter";
import { LocalHttpClient } from "../../infrastructure/clients/local-http-client";
import { ProductsRepository } from "../../infrastructure/repositories/products-repository";

class ProductsController implements ProductsControllerInterface {
  private productsService: ProductServiceInterface;

  constructor() {
    this.productsService = new ProductService(
      new ProductsRepository(new ProductAdapter(new LocalHttpClient()))
    );
  }

  async loadProducts(): Promise<Product[]> {
    const products = await this.productsService.loadProducts();
    return products;
  }

  async loadHighlightedProducts(): Promise<Product[]> {
    const products = await this.productsService.loadHighlightedProducts();

    return products;
  }

  async searchProductsByName(name: string): Promise<Product[]> {
    const productsResult = await this.productsService.searchByName(name);

    return productsResult;
  }

  async searchProductsByCategory(category: string): Promise<Product[]> {
    const productsResult = await this.productsService.searchByCategory(
      category
    );

    return productsResult;
  }
}

export default new ProductsController();
