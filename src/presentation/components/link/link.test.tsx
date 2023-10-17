import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Link } from ".";

describe("Link", () => {
  it("should render the component correctly", () => {
    render(
      <MemoryRouter>
        <Link to="/">Link</Link>
      </MemoryRouter>
    );

    expect(screen.getByText("Link")).toBeInTheDocument();
  });

  it("should set the defined to prop as href attribute", async () => {
    render(
      <MemoryRouter>
        <Link to="/">Link</Link>
      </MemoryRouter>
    );

    expect(screen.getByText("Link")).toHaveAttribute("href", "/");
  });
});
