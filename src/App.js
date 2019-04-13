import React, { Component } from "react";
import Grocery from "./components/grocery";
import Basket from "./components/basket";
import "./App.css";

const groceriesArray = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Carrot",
  "Celery",
  "Mushrooms",
  "Green Pepper",
  "Eggs",
  "Cheese",
  "Butter"
];

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
      ]
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

    this.setState({ selectedGroceries: newSelection });
  };

  render() {
    return (
      <>
        <div className="content">
          <div className="column__wrap">
            <h2 className="column__title">Groceries</h2>
            {groceriesArray.map((grocery, index) => (
              <Grocery
                key={index}
                index={index}
                grocery={grocery}
                plusHoverClass={this.state.plusHoverClass}
                selectedGroceries={this.selectedGroceries}
                onGroceryClick={this.handleGroceryClick}
              />
            ))}
          </div>
          <div className="column__wrap">
            <h2 className="column__title">Basket</h2>
            <Basket />
          </div>
        </div>
      </>
    );
  }
}

export default App;
