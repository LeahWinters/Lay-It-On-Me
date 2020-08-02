import React, { Component } from "react";
import { getRandomAdvice } from '../apiCalls';
import "./RandomAdvice.css";

class RandomAdvice extends Component {
  constructor() {
    super();
    this.state = {
      random: {advice:'loading'}
    }
  }

  componentDidMount = () => {
    this.grabRandomAdvice()
  }

  grabRandomAdvice = async () => {
    const randomAdvice = await getRandomAdvice();
    this.setState({random: randomAdvice})
    return randomAdvice
  }

  render() {
    return (
      <div className="random">
        {this.state.random.advice || this.state.random.slip.advice}
      </div>
    )
  }

  
}

export default RandomAdvice