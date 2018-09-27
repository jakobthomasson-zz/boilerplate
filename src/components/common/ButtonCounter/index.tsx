import React, { Component } from 'react';
import Button from 'components/UI/Button';

const initialState = { clicksCount: 0 };
type State = Readonly<typeof initialState>;

class ButtonCounter extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    const { clicksCount } = this.state;

    return (
      <>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
        You've clicked me {clicksCount} times
      </>
    );
  }

  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);

}

/**
 * Extract state update functions to pure functions.
 * Common pattern as we can test with ease without any knowledge of renderer layer.
 * Also because we mapped State to be explicitly read-only
 */

const incrementClicksCount = (prevState: State) => ({ clicksCount: prevState.clicksCount + 1 });
const decrementClicksCount = (prevState: State) => ({ clicksCount: prevState.clicksCount + 1 });
