import { fakerPT_BR as faker } from "@faker-js/faker";
import { Product } from "../../../domain/entities/product";
import { ProductAdapter } from "../../../infrastructure/adapters/product-adapter";
import { mockCategory } from "../../__mocks__/domain/entities/mock-product";
import { MockHttpClient } from "../../__mocks__/infrastructure/clients/mock-http-client";

describe("ProductAdapter", () => {
  const productAdapter = new ProductAdapter(new MockHttpClient<Product[]>());

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be able to call the get method without params", async () => {
    const spy = jest.spyOn(productAdapter, "get");
    const products = await productAdapter.get();

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to call the get method with name param", async () => {
    const spy = jest.spyOn(productAdapter, "get");
    const products = await productAdapter.get({
      name: faker.commerce.productName(),
    });

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to call the get method with category params", async () => {
    const spy = jest.spyOn(productAdapter, "get");
    const products = await productAdapter.get({ category: mockCategory() });

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });
});
