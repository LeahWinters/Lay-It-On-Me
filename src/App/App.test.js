import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { getSearchResults, getRandomAdvice } from "../apiCalls";
jest.mock("../apiCalls");

describe("App", () => {
  let mockGetSearchResults;
  let mockGetRandomAdvice;

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

    mockGetRandomAdvice = {
      id: 79,
      advice: "Just because you are offended, doesn't mean you are right.",
    };
  });

  it("Should see an error message if the user searches for an unknown advice", async () => {
    getSearchResults.mockResolvedValueOnce(mockGetSearchResults);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const submitBtn = getByText("Lay It On Me!");

    fireEvent.change(input, { target: { value: "blah" } });
    fireEvent.click(submitBtn);

    const errorMsg = await waitFor(() =>
      getByText("Sorry, I can't help with that")
    );

    expect(errorMsg).toBeInTheDocument();
  });

  it.skip("Should be able to search for advice and see a display of advice cards in a results page", async () => {
    getSearchResults.mockResolvedValueOnce(mockGetSearchResults);
    
    const { getByText, getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const submitBtn = getByText("Lay It On Me!");

    fireEvent.change(input, { target: { value: "love" } });
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

  it('Should see a message if the user has not saved any advice and clicks the saved advice button', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const savedAdviceBtn = getByText('Saved Advice');

    fireEvent.click(savedAdviceBtn);

    const message = await waitFor(() =>
      getByText("You have not saved", { exact: false })
    );
    
    expect(message).toBeInTheDocument();
  });

  it.skip('If the user saves some advice, they should see the saved advice when they click the saved advice button', async () => {
    getSearchResults.mockResolvedValueOnce(mockGetSearchResults);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = getByPlaceholderText("What's troubling you Hun?");
    const submitBtn = getByText("Lay It On Me!");
    const savedAdviceBtn = getByText('Saved Advice');

    fireEvent.change(input, { target: { value: "love" } });
    fireEvent.click(submitBtn);

    const advice1 = await waitFor(() =>
      getByText("Alway do anything for love", { exact: false })
    );
    const saveBtn = await waitFor(() => {
      getByText('SaveAdvice');
    });

    fireEvent.click(saveBtn);

    fireEvent.click(savedAdviceBtn);

    const deleteBtn = await waitFor(() => {
      getByText('Delete Advice');
    });

    expect(advice1).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });

  it('Should see a random piece of advice when the user clicks the Random Advice button', async () => {
    getRandomAdvice.mockResolvedValueOnce(mockGetRandomAdvice);

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const randomBtn = getByText('Random Advice');

    fireEvent.click(randomBtn);

    const advice = await waitFor(() =>
      getByText("Just because you", { exact: false })
    );

    expect(advice).toBeInTheDocument();

  });

  it.skip('Should be able to delete an advice card', async () => {

  });

  it.skip('Should be brought back to the home page, from random page, when user clicks Solicited Advice', async () => {
    getRandomAdvice.mockResolvedValueOnce(mockGetRandomAdvice);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const randomBtn = getByText('Random Advice');
    const homeBtn = getByText('Solicited Advice');
    
    fireEvent.click(randomBtn);

    const advice = await waitFor(() =>
      getByText("Just because you", { exact: false })
    );

    fireEvent.click(homeBtn);

    const input = await waitFor(() => {
      getByPlaceholderText("What's troubling you Hun?");
    });
    const submitBtn = await waitFor(() => {
      getByText("Lay It On Me!");
    });

    expect(input).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

});
