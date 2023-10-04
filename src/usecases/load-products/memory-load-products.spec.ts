import { MemoryLoadProducts } from "./memory-load-products";

describe("LocallyLoadProducts", () => {
  it("should load products from memory variable", async () => {
    const systemUnderTest = new MemoryLoadProducts();

    const products = await systemUnderTest.load();

    expect(products).not.toBeNull();
  });
});
