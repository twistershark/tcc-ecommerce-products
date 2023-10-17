import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("Button", () => {
  it("should render the component correctly", () => {
    render(<Button>Botão</Button>);

    expect(screen.getByText("Botão")).toBeInTheDocument();
  });

  it("should apply the correct classes on full variant", () => {
    render(<Button variant="full">Botão</Button>);

    expect(screen.getByText("Botão")).toHaveClass("pl-bg-black pl-text-white");
  });

  it("should apply the correct classes on outline variant", () => {
    render(<Button variant="outline">Botão</Button>);

    expect(screen.getByText("Botão")).toHaveClass(
      "pl-border pl-border-black pl-text-black"
    );
  });

  it("should call onclick function when button is clicked", async () => {
    const handleOnClickMock = jest.fn();
    render(<Button onClick={handleOnClickMock}>Botão</Button>);

    await userEvent.click(screen.getByText("Botão"));

    expect(handleOnClickMock).toHaveBeenCalled();
  });
});
