import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctily", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  })

})

describe("Nested", () => {
  test("renders Correctly", () => {
    render(<Greet name="Ridima" />);
    const textElement = screen.getByText("Hello Ridima");
    expect(textElement).toBeInTheDocument();
  })
})
