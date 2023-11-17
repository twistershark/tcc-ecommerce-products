import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import  Home from ".";
import userEvent from "@testing-library/user-event";
import Products from "../products";

jest.mock('tailwindcss/tailwind.css', () => '')

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

    await userEvent.click(screen.getByText("Ver Todos"));

    expect(screen.getByText("PRODUTOS")).toBeInTheDocument();
  });
});
