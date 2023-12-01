import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
        level:1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading",{
        level:2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // GetByText
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // getByTitle
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // getByAltText
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    // getbyTestId
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // Lable Text
    const nameElement2 =screen.getByLabelText("Name",{
      selector:"input",
    });
    expect(nameElement2).toBeInTheDocument();

    // getByPlaceholderText
    const nameElemente3 = screen.getByPlaceholderText("Fullname");
    expect(nameElemente3).toBeInTheDocument();

    // getByDisplayValue
    const nameElemente4 = screen.getByDisplayValue("Ridima");
    expect(nameElemente4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    // Lable Text
    const termsElement2 = screen.getByLabelText("I agree to the terms and conditions")
    expect(termsElement2).toBeInTheDocument();

    const SubmitButtonElement = screen.getByRole("button");
    expect(SubmitButtonElement).toBeInTheDocument();
  });
});
