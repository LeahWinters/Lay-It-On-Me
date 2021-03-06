import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("Should display the title of the application and two buttons", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const title = getByText("Solicited Advice");
    const randomBtn = getByText("Random Advice");
    const savedBtn = getByText("Saved Advice");

    expect(title).toBeInTheDocument();
    expect(randomBtn).toBeInTheDocument();
    expect(savedBtn).toBeInTheDocument();
  });
});
