import React, { Component } from "react";
import Grocery from "./components/grocery";
import Basket from "./components/basket";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGroceries: [
        ["Strawberry", 0],
        ["Blueberry", 0],
        ["Orange", 0],
        ["Banana", 0],
        ["Apple", 0],
        ["Carrot", 0],
        ["Celery", 0],
        ["Mushrooms", 0],
        ["Green Pepper", 0],
        ["Eggs", 0],
        ["Cheese", 0],
        ["Butter", 0]
      ],
      isBasketEmpty: true
    };
  }

  handleGroceryClick = grocery => {
    let newSelection = [];
    const { selectedGroceries } = this.state;

    selectedGroceries.forEach(item => {
      if (item[0] === grocery) {
        item[1]++;
        newSelection.push(item);
      } else newSelection.push(item);
    });

    this.setState({ selectedGroceries: newSelection, isBasketEmpty: false });

    console.log(this.state.selectedGroceries);
  };

  handleClearBasket = () => {
    let clearedSelection = [];
    this.state.selectedGroceries.forEach(item => {
      item[1] = 0;
      clearedSelection.push(item);
    });

    this.setState({ selectedGroceries: clearedSelection, isBasketEmpty: true });
  };

  handleRemoveGrocery = (grocery, e) => {
    e.stopPropagation();
    let newSelection = [];
    const { selectedGroceries } = this.state;

    let isEmpty = true;

    selectedGroceries.forEach(item => {
      if (item[0] === grocery) {
        item[1]--;
        newSelection.push(item);
      } else newSelection.push(item);

      if (item[1] !== 0) isEmpty = false;
    });

    this.setState({ selectedGroceries: newSelection, isBasketEmpty: isEmpty });
  };

  render() {
    return (
      <>
        <div className="content">
          <div className="column__wrap">
            <h2 className="column__title">Groceries</h2>
            {this.state.selectedGroceries.map((grocery, index) => (
              <Grocery
                key={index}
                index={index}
                grocery={grocery[0]}
                plusHoverClass={this.state.plusHoverClass}
                selectedGroceries={this.selectedGroceries}
                onGroceryClick={this.handleGroceryClick}
              />
            ))}
          </div>
          <div className="column__wrap">
            <h2 className="column__title">Basket</h2>
            {this.state.isBasketEmpty ? (
              "Your basket is empty!"
            ) : (
              <div>
                <h2 className="clear__basket" onClick={this.handleClearBasket}>
                  &times;
                </h2>
                {this.state.selectedGroceries.map((groceryArray, index) => (
                  <Basket
                    key={index}
                    grocery={groceryArray[0]}
                    amount={groceryArray[1]}
                    onRemoveGrocery={this.handleRemoveGrocery}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
