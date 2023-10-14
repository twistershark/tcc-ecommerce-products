import { PRODUCTS } from "../../../constants/products";
import { Product } from "../../../domain/entities/product";
import { ProductServiceInterface } from "../../../domain/services/products-service-interface";

export class ProductsServiceMock implements ProductServiceInterface {
  async loadProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  async loadHighlightedProducts(): Promise<Product[]> {
    const tempProducts = [...PRODUCTS];
    const randomProducts = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * tempProducts.length);

      randomProducts.push(tempProducts[randomIndex]);

      tempProducts.splice(randomIndex, 1);
    }

    return randomProducts;
  }

  async searchByName(name: string): Promise<Product[]> {
    return Promise.resolve(
      PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }

  async searchByCategory(category: string): Promise<Product[]> {
    return Promise.resolve(
      PRODUCTS.filter((product) => product.category === category)
    );
  }
}
