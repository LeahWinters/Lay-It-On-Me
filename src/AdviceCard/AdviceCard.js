import React from "react";
import { Link } from "react-router-dom";
import "./AdviceCard.css";

const AdviceCard = ({ advice, id, saveAdvice, slip }) => {
  return (
    <section className="advice-card">
      <h4 className="advice">{advice}</h4>
      <button 
        className="add-fav-btn"
        type="button"
        onClick={() => saveAdvice(slip)}
      >
        Save Advice
      </button>
    </section>
  )
}

export default AdviceCard;

