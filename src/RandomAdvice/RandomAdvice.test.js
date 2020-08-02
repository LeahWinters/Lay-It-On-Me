import React from "react";
import RandomAdvice from "./RandomAdvice";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getRandomAdvice } from "../apiCalls";
jest.mock("../apiCalls");

describe("RandomAdvice", () => {
  let mockGetRandomAdvice;

  beforeEach(() => {
    mockGetRandomAdvice = {
      id: 79,
      advice: "Just because you are offended, doesn't mean you are right.",
    };
  });

  it("Should display a piece of random advice", async () => {
    getRandomAdvice.mockResolvedValueOnce(mockGetRandomAdvice);

    const { getByText } = render(
      <MemoryRouter>
        <RandomAdvice />
      </MemoryRouter>
    );

    const advice = await waitFor(() =>
      getByText("Just because you", { exact: false })
    );

    expect(advice).toBeInTheDocument();
  });
});
