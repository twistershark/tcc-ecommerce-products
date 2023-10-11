import { Product } from "../../domain/entities/product";

export type ProductAdapterInterfaceGetParams = {
  name?: string;
  category?: string;
};

export interface ProductAdapterInterface {
  get(params?: ProductAdapterInterfaceGetParams): Promise<Product[]>;
}
