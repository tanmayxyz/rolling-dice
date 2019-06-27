import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "two",
      rolling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const roll1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const roll2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ die1: roll1, die2: roll2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <Die diceNum={this.state.die1} rolling={this.state.rolling} />
        <Die diceNum={this.state.die2} rolling={this.state.rolling} />
        <button onClick={this.handleClick} disabled={this.state.rolling}>
          {this.state.rolling ? "is Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
