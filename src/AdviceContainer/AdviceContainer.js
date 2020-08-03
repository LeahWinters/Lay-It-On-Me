import React from "react";
import "./AdviceContainer.css";
import AdviceCard from "../AdviceCard/AdviceCard";

const AdviceContainer = ({ searchedAdvice, saveAdvice }) => {
  const arrayToDisplay = searchedAdvice.map((slip) => {
    return (
      <AdviceCard
        advice={slip.advice}
        id={slip.id}
        key={slip.id}
        saveAdvice={saveAdvice}
        slip={slip}
      />
    );
  });

  return <section className="advice-container">{arrayToDisplay}</section>;
};

export default AdviceContainer;
