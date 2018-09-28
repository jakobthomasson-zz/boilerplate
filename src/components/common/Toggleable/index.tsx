import React, { Component, MouseEvent } from 'react';
import { utilHelpers } from 'helpers';
import { isFunction } from 'util';

const initialState = {
  show: false,
};
type State = Readonly<typeof initialState>;

// Define component props, Partial means that all props is optional, instead of using ? opearator everywhere
type Props = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

// Make things DRY (don't repeat yourself), very optional
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

// Lookup types - so we don't have to repeat ourselves when defining types.
// Basically it says look for property ['property'] in type/class Whatever; Whatever['property]
export type ToggleableComponentProps = {
  show: State['show'];
  toggle: Toggleable['toggle'];
};

class Toggleable extends Component<Props, State> {
  readonly state: State = initialState;

  render() {
    const { children, render } = this.props;
    const renderProps: ToggleableComponentProps = { show: this.state.show, toggle: this.toggle };

    // If render prop is used <Toggleable render={() => <div>Render method</div>} />
    // See RenderTest
    if (render) {
      return render(renderProps);
    }

    // If children is used <Toggleable>{() => <div>children render</div>}</Toggleable>
    // See ChildrenTest
    return isFunction(children) ? children(renderProps) : null;

  }

  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState);
}
const updateShowState = (prevState: State) => ({ show: !prevState.show });

export default Toggleable;

// We get intellisense in both RenderTest and ChildrenTest
const RenderTest = () => (
  <Toggleable
    render={({ show, toggle }) => (
      <>
        <div onClick={toggle}>
          <h1>Some title</h1>
        </div>
        {show ? <p>some content</p> : null}
      </>
    )}
  />
);
const ChildrenTest = () => (
  <Toggleable>
    {({ show, toggle }) => (
      <>
        <div onClick={toggle}>
          <h1>Some title</h1>
        </div>
        {show ? <p>some content</p> : null}
      </>
    )}
  </Toggleable>
);
