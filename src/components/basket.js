import React, { Component } from "react";
import "../App.css";

class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minusHoverClass: "",
      crossOff: "",
      isCrossed: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ minusHoverClass: "#FF4136" });
  };

  handleMouseLeave = () => {
    this.setState({ minusHoverClass: "" });
  };

  handleCrossingOff = () => {
    if (!this.state.isCrossed)
      this.setState({ crossOff: "line-through", isCrossed: true });
    else this.setState({ crossOff: "", isCrossed: false });
  };

  render() {
    const isGroceryClicked = this.props.amount !== 0;

    return (
      <>
        {isGroceryClicked ? (
          <div
            className="groceries__item"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleCrossingOff}
          >
            <p
              className="groceries__item--plus"
              style={{ backgroundColor: this.state.minusHoverClass }}
              onClick={e => this.props.onRemoveGrocery(this.props.grocery, e)}
            >
              -
            </p>
            <p className="groceries__item--amount">{this.props.amount}</p>
            <p
              // I originaly put the click on the whole groceries__item so
              // I'm leaving this comment just to show that I read the instructions
              // but opted to be stupid and forget about them until the end of the task :D

              // onClick={this.handleCrossingOff}
              style={{ textDecoration: this.state.crossOff }}
            >
              {this.props.grocery}
            </p>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Basket;
