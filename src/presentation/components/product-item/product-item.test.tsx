import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductItem } from ".";
import { createRandomProduct } from "../../../__tests__/__mocks__/domain/entities/mock-product";

describe("ProductItem", () => {
  it("should render the component correctly", () => {
    const mockProduct = createRandomProduct();

    render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`R$ ${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.color)).toBeInTheDocument();
  });
});
