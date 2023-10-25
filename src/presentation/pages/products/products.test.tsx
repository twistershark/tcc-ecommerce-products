import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Products } from ".";
import { userEvent } from "@testing-library/user-event";
import productsController from "../../controllers/products-controller";
import { categoriesOptions } from "./constants/categories-options";

describe("ProductsPage", () => {
  it("should render the component correctly", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      );

      expect(screen.getByText("Filtrar por categoria:")).toBeInTheDocument();
      expect(screen.getByText("PRODUTOS")).toBeInTheDocument();
    });
  });

  it("should be able to filter by name", async () => {
    const productsControllerSearchByNameSpy = jest.spyOn(
      productsController,
      "searchProductsByName"
    );

    const productsControllerLoadProductsSpy = jest.spyOn(
      productsController,
      "loadProducts"
    );

    await waitFor(() => {
      render(
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      );
    });

    const input = screen.getByTestId("search-input");

    await userEvent.type(input, "Bolsa");

    await userEvent.click(screen.getByTestId("search-button"));

    expect(productsControllerSearchByNameSpy).toHaveBeenCalled();

    await userEvent.type(input, "Camiseta{enter}");


    expect(productsControllerLoadProductsSpy).toHaveBeenCalled();
  });

  it("should be able to filter by category", async () => {
    const productsControllerSearchByCategorySpy = jest.spyOn(
      productsController,
      "searchProductsByCategory"
    );

    const productsControllerLoadProductsSpy = jest.spyOn(
      productsController,
      "loadProducts"
    );

    await waitFor(() => {
      render(
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      );
    });

    const categoryOption = categoriesOptions[0].name;

    const categoryButton = screen.getByText(categoryOption);

    await userEvent.click(categoryButton);

    expect(productsControllerSearchByCategorySpy).toHaveBeenCalled();

    await userEvent.click(categoryButton);

    expect(productsControllerLoadProductsSpy).toHaveBeenCalled();
  });
});
