import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from ".";

describe("Home", () => {
  it("should render the page correctly", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    expect(screen.getByText("NOVOS MODELOS")).toBeInTheDocument();
    expect(screen.getByText("Ver Produtos")).toBeInTheDocument();
  });
});
