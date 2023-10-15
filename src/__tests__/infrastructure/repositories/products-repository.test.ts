import { Product } from "../../../domain/entities/product";
import { ProductsRepository } from "../../../infrastructure/repositories/products-repository";
import { mockCategory } from "../../__mocks__/domain/entities/mock-product";
import { MockProductAdapter } from "../../__mocks__/infrastructure/adapters/mock-product-adapter";

import { fakerPT_BR as faker } from "@faker-js/faker";

describe("ProductsRepository", () => {
  const productsRepository = new ProductsRepository(new MockProductAdapter());

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be able to call the loadProducts method", async () => {
    const spy = jest.spyOn(productsRepository, "loadProducts");
    const products = await productsRepository.loadProducts();

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to call the searchByName method", async () => {
    const spy = jest.spyOn(productsRepository, "searchByName");
    const name = faker.commerce.productName();
    const products = await productsRepository.searchByName(name);

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to call the searchByCategory method", async () => {
    const spy = jest.spyOn(productsRepository, "searchByCategory");
    const category = mockCategory();
    const products = await productsRepository.searchByCategory(category);

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });
});
