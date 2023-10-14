import { ProductsServiceMock } from "../../application/services/tests/products-service-mock";
import { PRODUCTS } from "../../constants/products";
import { Category } from "../../domain/entities/product";
import { ProductsController } from "./products-controller";

describe("ProductsController", () => {
  const productService = new ProductsServiceMock();
  const productsController = new ProductsController(productService);

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
    const name = "Bolsa";
    const products = await productsController.searchProductsByName(name);

    const filteredProducts = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    expect(products).toStrictEqual(filteredProducts);
  });

  it("should search products by category", async () => {
    const category = Category.PURSES;
    const products = await productsController.searchProductsByCategory(
      category
    );

    const filteredProducts = PRODUCTS.filter(
      (product) => product.category === category
    );

    expect(products).toStrictEqual(filteredProducts);
  });
});
