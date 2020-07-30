import React from "react";
import { Link } from "react-router-dom";
import "./AdviceContainer.css";

const AdviceContainer = ({searchedAdvice}) => {
  const arrayToDisplay = searchedAdvice.map(slip => {
    return (<p>{slip.advice}</p>)
  })

  console.log(searchedAdvice)
  return (
  <div>{arrayToDisplay}</div>
  )
}

export default AdviceContainer;