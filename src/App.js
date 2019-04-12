import React, { Component } from "react";
import Grocery from "./components/grocery";
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
      clickedArray: []
    };
  }

  render() {
    return (
      <>
        <h2 className="groceries__title">Groceries</h2>
        <div className="groceries__wrap">
          {groceriesArray.map((grocery, index) => (
            <Grocery key={index} index={index} grocery={grocery} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
