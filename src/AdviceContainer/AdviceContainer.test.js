import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AdviceContainer from "./AdviceContainer";

describe("AdviceContainer", () => {
  let mockAdvice;

  beforeEach(() => {
    mockAdvice = [
      {
        id: 101,
        advice: "Alway do anything for love, but don't do that.",
        date: "2015-12-08",
      },
      { id: 174, advice: "Be a good lover.", date: "2014-06-03" },
      {
        id: 184,
        advice:
          "You can fail at what you don't want. So you might as well take a chance on doing what you love.",
        date: "2017-03-10",
      },
    ];
  });

  it("Should display advice cards", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <AdviceContainer searchedAdvice={mockAdvice} />
      </MemoryRouter>
    );

    const advice1 = await waitFor(() =>
      getByText("Alway do anything for love", { exact: false })
    );
    const advice2 = await waitFor(() =>
      getByText("Be a good", { exact: false })
    );

    expect(advice1).toBeInTheDocument();
    expect(advice2).toBeInTheDocument();
  });
});
