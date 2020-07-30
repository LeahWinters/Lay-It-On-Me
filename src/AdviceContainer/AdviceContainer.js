import React from "react";
import { Link } from "react-router-dom";
import "./AdviceContainer.css";
import AdviceCard from "../AdviceCard/AdviceCard";

const AdviceContainer = ({ searchedAdvice }) => {
  const arrayToDisplay = searchedAdvice.map((slip) => {
    return (
      <AdviceCard 
        advice={slip.advice} 
        id={slip.id}
        key={slip.id}
      />
    );
  });

  return (
    <section className="advice-container">
      {arrayToDisplay}
    </section>
  );
};

export default AdviceContainer;
