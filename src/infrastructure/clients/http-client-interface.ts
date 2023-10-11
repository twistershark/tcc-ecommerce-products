export interface HttpClientInterface<T> {
  get(url: string): Promise<T>;
}
