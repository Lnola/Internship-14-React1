import React, { Component } from "react";

class Grocery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plusHoverClass: "",
      selectedGroceries: []
    };
  }

  handleMouseEnter = () => {
    this.setState({ plusHoverClass: "green" });
  };

  handleMouseLeave = () => {
    this.setState({ plusHoverClass: "" });
  };

  handleClick = grocery => {
    let newSelection = [];
    const { selectedGroceries } = this.state;

    selectedGroceries.forEach(item => {
      newSelection.push(item);
    });
    newSelection.push(grocery);

    this.setState({ selectedGroceries: newSelection });
  };

  render() {
    return (
      <>
        <div
          className="groceries__item"
          key={this.props.index}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={() => this.handleClick(this.props.grocery)}
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
