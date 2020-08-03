import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';
import { getSearchResults } from '../apiCalls';

describe("App", () => {
  let mockGetSearchResults;

  beforeEach(() => {
    mockGetSearchResults = [
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

  it("Should be able to search for advice and see a display of advice cards in a results page", async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const submitBtn = getByText("Lay It On Me!");

    fireEvent.change((input), {target: {value: 'love'}});
    fireEvent.click(submitBtn);

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