import { PRODUCTS } from "../../constants/products";
import { HttpClientInterface } from "./http-client-interface";

export class LocalHttpClient<T> implements HttpClientInterface<T> {
  private baseURL = "http://localhost:3000";

  async get(pathname: string): Promise<any> {
    const url = new URL(pathname, this.baseURL);

    const name = url.searchParams.get("name");
    const category = url.searchParams.get("category");

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
