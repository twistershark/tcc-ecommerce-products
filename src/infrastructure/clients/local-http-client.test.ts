import { PRODUCTS } from "../../constants/products";
import { Category } from "../../domain/entities/product";
import { LocalHttpClient } from "./local-http-client";

describe("LocalHttpClient", () => {
  it("should be able to call the get method and receive the correct products response", () => {
    const url = "/products";
    const httpClient = new LocalHttpClient();

    const response = httpClient.get(url);

    expect(response).resolves.toStrictEqual(PRODUCTS);
  });

  it("should be able to call the get method and receive the correct products response with name filter", async () => {
    const httpClient = new LocalHttpClient();

    const name = "Bolsa";

    const searchParams = new URLSearchParams();
    searchParams.set("name", name);

    const url = `/products?${searchParams.toString()}`;

    const response = await httpClient.get(url);

    const filteredProducts = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    expect(response).toStrictEqual(filteredProducts);
  });

  it("should be able to call the get method and receive the correct products response with category filter", async () => {
    const httpClient = new LocalHttpClient();

    const category = Category.PURSES;

    const searchParams = new URLSearchParams();
    searchParams.set("category", category);

    const url = `/products?${searchParams.toString()}`;

    const response = await httpClient.get(url);

    const filteredProducts = PRODUCTS.filter(
      (product) => product.category === category
    );

    expect(response).toStrictEqual(filteredProducts);
  });
});
