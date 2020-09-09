import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW

  constructor(props) {
    super(props)
    this.state = {
      count: this.props.initial
    }
  }

  increaseCount = (e) => {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount = (e) => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increaseCount}>Increase Count</button>
        <button onClick={this.decreaseCount}>Decrease Count</button>
      </div>
    )
  }
}

export default Counter
