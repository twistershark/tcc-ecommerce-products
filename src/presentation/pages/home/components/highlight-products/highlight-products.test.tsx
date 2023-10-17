import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HighlightProducts } from ".";

describe("Home", () => {
  it("should render the component correctly", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <HighlightProducts />
        </MemoryRouter>
      );
    });
  });
});
