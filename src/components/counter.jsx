import React, { Component } from "react";

class Counter extends Component {
  /*
  Um outro modo de fazer o código abaixo é usando arrow function, pois ela não possui contexto "this"
  ela herda ele
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  Ao invés de fazer o código assim:
  handleIncrement() {
    console.log("Increment Clicked");
  }
  você pode fazer assim:
  */

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
