import React from "react";
import "./SavedAdviceContainer.css";
import SavedAdviceCard from "../SavedAdviceCard/SavedAdviceCard";

const SavedAdviceContainer = ({ deleteSavedAdvice, savedAdvice }) => {
  const arrayToDisplay = savedAdvice.map((slip) => {
    return (
      <SavedAdviceCard
        advice={slip.advice}
        id={slip.id}
        key={slip.id}
        savedAdvice={savedAdvice}
        deleteSavedAdvice={deleteSavedAdvice}
        slip={slip}
      />
    );
  });

  if (savedAdvice.length === 0) {
    return (
      <section className="saved-advice-container">
        <p className="add-save-message">
          You have not saved any advice yet! When you do, you will see them here
        </p>
      </section>
    );
  } else {
    return (
      <section className="saved-advice-container">{arrayToDisplay}</section>
    );
  }
};

export default SavedAdviceContainer;
