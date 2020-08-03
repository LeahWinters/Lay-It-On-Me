import React, { Component } from "react";
import { getRandomAdvice } from "../apiCalls";
import "./RandomAdvice.css";

class RandomAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: { advice: "loading" },
    };
  }

  componentDidMount = () => {
    this.grabRandomAdvice();
  };

  grabRandomAdvice = async () => {
    const randomAdvice = await getRandomAdvice();
    this.setState({ random: randomAdvice });
    return randomAdvice;
  };

  render() {
    return (
      <div className="random">
        {this.state.random.advice || (
          <div className="advice-card">
            {this.state.random.slip.advice}
            <button
              type="button"
              className="add-fav-btn"
              type="button"
              onClick={() => this.props.saveAdvice(this.state.random.slip)}
            >
              Save Advice
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default RandomAdvice;
