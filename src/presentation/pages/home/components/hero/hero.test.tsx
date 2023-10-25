import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HomeHero } from ".";
import userEvent from "@testing-library/user-event";
import { Home } from "../..";
import { Products } from "../../../products";

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

  it("should be able to navigate to products page", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
            </Routes>
          
        </MemoryRouter>
      );
    });

    await userEvent.click(screen.getByText("Ver Produtos"));

    expect(screen.getByText("PRODUTOS")).toBeInTheDocument();
  })
});
