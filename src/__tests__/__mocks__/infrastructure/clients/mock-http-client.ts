import { HttpClientInterface } from "../../../../infrastructure/clients/http-client-interface";

export class MockHttpClient<T> implements HttpClientInterface<T> {
  async get(_pathname: string): Promise<any> {
    return Promise.resolve([] as T[]);
  }
}
