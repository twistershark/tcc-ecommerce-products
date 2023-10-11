import { PRODUCTS } from "../../constants/products";
import { HttpClientInterface } from "./http-client-interface";

export class LocalHttpClient<T> implements HttpClientInterface<T> {
  async get(url: string): Promise<any> {
    const searchParams = new URLSearchParams(url);
    const name = searchParams.get("name");
    const category = searchParams.get("category");

    if (name) {
      return Promise.resolve(
        PRODUCTS.filter((product) =>
          product.name.toLowerCase().includes(name.toLowerCase())
        )
      );
    }

    if (category) {
      return Promise.resolve(
        PRODUCTS.filter((product) => product.category === category)
      );
    }

    return Promise.resolve(PRODUCTS);
  }
}
