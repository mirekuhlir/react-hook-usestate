import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleCounter = this.handleCounter.bind(this);
  }
  handleCounter(value) {
    this.setState({
      count: value
    });
  }
  render() {
    return (
      <div>
        <div>
          <h2>class component</h2>
          <p>{this.state.count}</p>
          <button onClick={() => this.handleCounter(this.state.count + 1)}>
            Increment
          </button>
          <button onClick={() => this.handleCounter(this.state.count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

function CounterFunction() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h2>function with useState hook</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <CounterClass />
        <CounterFunction />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
