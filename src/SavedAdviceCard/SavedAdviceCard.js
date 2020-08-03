import React from "react";
import "./SavedAdviceCard.css";

const SavedAdviceCard = ({ advice, deleteSavedAdvice, slip }) => {
  return (
    <section className="saved-advice-card">
      <h4 className="advice">{advice}</h4>
      <button
        className="delete-saved-btn"
        type="button"
        onClick={() => deleteSavedAdvice(slip)}
      >
        Delete Advice
      </button>
    </section>
  );
};

export default SavedAdviceCard;
