import { ProductsController } from "../../../presentation/controllers/products-controller";
import { mockCategory } from "../../__mocks__/domain/entities/mock-product";
import { MockProductsService } from "../../__mocks__/domain/services/mock-products-service";

import { fakerPT_BR as faker } from "@faker-js/faker";

describe("ProductsController", () => {
  const productsService = new MockProductsService();
  const productsController = new ProductsController(productsService);

  it("should load products", async () => {
    const products = await productsController.loadProducts();

    expect(products).toBeDefined();
  });

  it("should load highlighted products", async () => {
    const products = await productsController.loadHighlightedProducts();

    expect(products).toBeDefined();
    expect(products).toHaveLength(4);
  });

  it("should search products by name", async () => {
    const name = faker.commerce.productName();
    const products = await productsController.searchProductsByName(name);

    products.map((product) =>
      expect(product.name.toLowerCase().includes(name)).toBeTruthy()
    );
  });

  it("should search products by category", async () => {
    const category = mockCategory();
    const products = await productsController.searchProductsByCategory(
      category
    );

    products.map((product) =>
      expect(product.category === category).toBeTruthy()
    );
  });
});
