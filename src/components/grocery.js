import React, { Component } from "react";

class Grocery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plusHoverClass: ""
    };
  }

  handleMouseEnter = () => {
    this.setState({ plusHoverClass: "green" });
  };

  handleMouseLeave = () => {
    this.setState({ plusHoverClass: "" });
  };

  render() {
    return (
      <>
        <div
          className="groceries__item"
          key={this.props.index}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={() => this.props.onGroceryClick(this.props.grocery)}
        >
          <p
            className="groceries__item--plus"
            style={{ backgroundColor: this.state.plusHoverClass }}
          >
            +
          </p>
          <p>{this.props.grocery}</p>
        </div>
      </>
    );
  }
}

export default Grocery;
