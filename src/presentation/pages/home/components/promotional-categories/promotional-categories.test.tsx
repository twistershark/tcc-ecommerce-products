import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PromotionalCategories } from ".";

describe("Home", () => {
  it("should render the component correctly", () => {
    render(
      <MemoryRouter>
        <PromotionalCategories />
      </MemoryRouter>
    );

    expect(screen.getByText("TENDÊNCIAS MASCULINAS")).toBeInTheDocument();
    expect(screen.getByText("NOVA COLEÇÃO 2023")).toBeInTheDocument();
  });
});
