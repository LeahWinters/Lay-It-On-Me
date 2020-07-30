import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdviceCard from './AdviceCard';

describe("AdviceCard", () => {
  it('Should display advice and a save advice button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AdviceCard 
          advice={'Never waste an opportunity to tell someone you love them.'}
          id={32}
          key={32}
        />
      </MemoryRouter>
    );

    const advice = getByText("Never waste an", { exact: false });
    const savedBtn = getByText("Save Advice");

    expect(advice).toBeInTheDocument();
    expect(savedBtn).toBeInTheDocument();

  });
})