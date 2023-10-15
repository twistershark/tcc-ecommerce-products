import { Product } from "../../../../domain/entities/product";
import {
  ProductAdapterInterface,
  ProductAdapterInterfaceGetParams,
} from "../../../../infrastructure/adapters/product-adapter-interface";
import { MockHttpClient } from "../clients/mock-http-client";

export class MockProductAdapter implements ProductAdapterInterface {
  private httpClient = new MockHttpClient<Product[]>();

  async get(params: ProductAdapterInterfaceGetParams): Promise<Product[]> {
    if (!params) {
      const data = await this.httpClient.get("/products");
      return data;
    }

    const { name, category } = params;

    const searchParams = new URLSearchParams();
    if (name) searchParams.append("name", name);
    if (category) searchParams.append("category", category);

    const data = await this.httpClient.get(
      `/products?${searchParams.toString()}`
    );
    return data;
  }
}
