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

  return (
    <section className="saved-advice-container">
      {arrayToDisplay}
    </section>
  );
};

export default SavedAdviceContainer;