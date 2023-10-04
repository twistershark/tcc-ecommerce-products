import { Product } from "../entities/product";

export interface LoadProducts {
  load: () => Promise<Product[]>;
}
