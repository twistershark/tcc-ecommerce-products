import { Product } from "../models/product";

export interface LoadProducts {
  load: () => Promise<Product[]>;
}
