import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("Should display a form with an input and a submit button", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <SearchForm
          // grabSearchedResults={mockGrabSearchResults}
          // searchedAdvice={mockSearchedAdvice}
          currentPage={"home"}
          error={false}
        />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const button = getByText("Lay It On Me!");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
