import React from "react";
import "./SavedAdviceCard.css";

const SavedAdviceCard = ({ advice, id, DeleteSaveAdvice, slip }) => {
  return (
    <section className="advice-card">
      <h4 className="advice">{advice}</h4>
      <button 
        className="add-fav-btn"
        type="button"
        onClick={() => deleteSavedAdvice(slip)}
      >
        Save Advice
      </button>
    </section>
  )
}

export default SavedAdviceCard;