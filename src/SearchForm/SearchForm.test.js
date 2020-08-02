import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("Should display a form with an input and a submit button", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <SearchForm currentPage={"home"} error={false} />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const button = getByText("Lay It On Me!");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should display a form with an input and a submit button, and an error message if the user enters a wrong query search word", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <SearchForm currentPage={"home"} error={true} />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const button = getByText("Lay It On Me!");
    const errorMsg = getByText("Sorry, I can't help with that");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(errorMsg).toBeInTheDocument();
  });
});
