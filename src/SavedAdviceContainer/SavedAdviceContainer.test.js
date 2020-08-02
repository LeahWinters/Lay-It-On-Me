import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SavedAdviceContainer from './SavedAdviceContainer';

describe("SavedAdviceContainer", () => {
  let mockSavedAdvice;

  beforeEach(() => {
    
    mockSavedAdvice = [
      {"id":101,"advice":"Alway do anything for love, but don't do that.","date":"2015-12-08"},
      {"id":174,"advice":"Be a good lover.","date":"2014-06-03"},
      {"id":184,"advice":"You can fail at what you don't want. So you might as well take a chance on doing what you love.","date":"2017-03-10"}
    ]
  });

  it('Should display advice cards if advice has been saved', async () => {
    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <SavedAdviceContainer
          savedAdvice={ mockSavedAdvice }
        />
      </MemoryRouter>
    );

    const advice1 = await waitFor(() => getByText('Alway do anything for love', {exact: false}));
    const advice2 = await waitFor(() => getByText('Be a good', {exact: false}));
    const deleteBtn = await waitFor(() => getAllByText('Delete Advice'));

    expect(advice1).toBeInTheDocument();
    expect(advice2).toBeInTheDocument();
    expect(deleteBtn.length).toBeLessThanOrEqual(3);

  });
})