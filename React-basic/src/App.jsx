import { Component } from "react";

export default class CounterClass extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return <div>
      <div>Count is : {this.state.count}</div>
      <button onClick={this.increment}>Increment</button>
    </div>
  }
}