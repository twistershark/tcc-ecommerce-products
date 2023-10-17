import { fakerPT_BR as faker } from "@faker-js/faker";
import { ProductService } from "../../../application/services/products-service";
import { Product } from "../../../domain/entities/product";
import { mockCategory } from "../../__mocks__/domain/entities/mock-product";
import { MockProductRepository } from "../../__mocks__/domain/repositories/mock-product-repository";

describe("ProductsService", () => {
  const productsService = new ProductService(new MockProductRepository());

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be able to load all products", async () => {
    const spy = jest.spyOn(productsService, "loadProducts");
    const products = await productsService.loadProducts();

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to load highlight products", async () => {
    const spy = jest.spyOn(productsService, "loadHighlightedProducts");
    const products = await productsService.loadHighlightedProducts();

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
    expect(products).toHaveLength(4);
  });

  it("should be able to filter products by name", async () => {
    const spy = jest.spyOn(productsService, "searchByName");
    const nameMock = faker.commerce.productName();
    const products = await productsService.searchByName(nameMock);

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to filter products by category", async () => {
    const spy = jest.spyOn(productsService, "searchByCategory");
    const categoryMock = mockCategory();
    const products = await productsService.searchByCategory(categoryMock);

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });
});
