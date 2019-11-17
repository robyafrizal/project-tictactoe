import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      button: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button
    });
  }
  updateCount() {
    this.setState((myState, props) => {
      return { count: myState.count + 1 };
    });
  }
  render() {
    return (
      <button
        className={this.state.button ? "buttonTrue" : "buttonFalse"}
        onClick={() => this.updateCount()}
        onMouseUp={() => this.handleClick()}
      >
        Set Games : {this.state.count} times
      </button>
    );
  }
}

export default Button;
