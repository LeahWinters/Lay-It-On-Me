import React from "react";
import SavedAdviceCard from "./SavedAdviceCard";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SavedAdviceCard", () => {
  it("Should saved display advice and a delete advice button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <SavedAdviceCard
          advice={"Never waste an opportunity to tell someone you love them."}
          id={32}
          key={32}
        />
      </MemoryRouter>
    );

    const advice = getByText("Never waste an", { exact: false });
    const deleteBtn = getByText("Delete Advice");

    expect(advice).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });
});
