import { HttpClientInterface } from "../../../../infrastructure/clients/http-client-interface";

export class MockHttpClient<T> implements HttpClientInterface<T> {
  async get(pathname: string): Promise<any> {
    new URL(pathname, "http://localhost:3000");
    return Promise.resolve([] as T[]);
  }
}
