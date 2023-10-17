import { fakerPT_BR as faker } from "@faker-js/faker";
import { Category, Product } from "../../../../domain/entities/product";

const categories = Object.keys(Category);

export const mockCategory = (): Category =>
  faker.helpers.arrayElement(categories) as Category;

export function createRandomProduct(): Product {
  return {
    id: faker.string.uuid(),
    category: mockCategory(),
    name: faker.commerce.productName(),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.urlPlaceholder(),
    price: Number(faker.commerce.price()),
    productId: faker.string.uuid(),
    version: "1",
  };
}

export function createRandomProducts(amount: number): Product[] {
  return faker.helpers.multiple(createRandomProduct, {
    count: amount,
  });
}
