import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeHero } from ".";

describe("Home", () => {
  it("should render the component correctly", () => {
    render(
      <MemoryRouter>
        <HomeHero />
      </MemoryRouter>
    );

    expect(screen.getByText("ELEVE O SEU GUARDA-ROUPA")).toBeInTheDocument();
    expect(screen.getByText("Tendências da moda")).toBeInTheDocument();
    expect(screen.getByText("Ver Produtos")).toBeInTheDocument();
  });
});
