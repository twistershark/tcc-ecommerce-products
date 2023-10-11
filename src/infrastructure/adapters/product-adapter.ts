import { Product } from "../../domain/entities/product";
import { HttpClientInterface } from "../clients/http-client-interface";
import {
  ProductAdapterInterface,
  ProductAdapterInterfaceGetParams,
} from "./product-adapter-interface";

export class ProductAdapter implements ProductAdapterInterface {
  private httpClient: HttpClientInterface<Product[]>;

  constructor(httpClient: HttpClientInterface<Product[]>) {
    this.httpClient = httpClient;
  }
  async get({
    name,
    category,
  }: ProductAdapterInterfaceGetParams): Promise<Product[]> {
    if (name || category) {
      const searchParams = new URLSearchParams();
      if (name) searchParams.append("name", name);
      if (category) searchParams.append("category", category);

      const data = await this.httpClient.get(
        `/products?${searchParams.toString()}`
      );
      return data;
    }

    const data = await this.httpClient.get("/products");
    return data;
  }
}
