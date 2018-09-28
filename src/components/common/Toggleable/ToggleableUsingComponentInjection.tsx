import React, { Component, MouseEvent, ComponentType, SFC, ReactNode } from 'react';
import { utilHelpers } from 'helpers';
// import { isFunction } from 'util';

// TODO: Is this not overcomplicating things? I don't understand it fully
const initialState = {
  show: false,
};
const defaultProps: DefaultProps = { props: {} };

type State = Readonly<typeof initialState>;

// Define component props, Partial means that all props is optional, instead of using ? opearator everywhere
export type Props<P extends object = object> = Partial<
  {
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps<P>>
  } & DefaultProps<P>>;

type DefaultProps<P extends object = object> = { props: P };
// Make things DRY (don't repeat yourself), very optional
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

// Lookup types - so we don't have to repeat ourselves when defining types.
// Basically it says look for property ['property'] in type/class Whatever; Whatever['property]
export type ToggleableComponentProps<P extends object = object> = {
  show: State['show'];
  toggle: Toggleable['toggle'];
} & P;

export class Toggleable<T extends object = object> extends Component<Props<T>, State> {
  static ofType<T extends object>() {
    return Toggleable as Constructor<Toggleable<T>>;
  }
  static readonly defaultProps: Props = defaultProps;
  readonly state: State = { show: this.state.show };

  render() {
    const { component: InjectedComponent, children, render, props } = this.props;
    const renderProps: ToggleableComponentProps = { show: this.state.show, toggle: this.toggle };

    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      );
    }
    // If render prop is used <Toggleable render={() => <div>Render method</div>} />
    // See RenderTest
    if (render) {
      return render(renderProps);
    }

    // If children is used <Toggleable>{() => <div>children render</div>}</Toggleable>
    // See ChildrenTest
    return utilHelpers.isFunction(children) ? children(renderProps) : new Error('error()');

  }

  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState);
}
const updateShowState = (prevState: State) => ({ show: !prevState.show });

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

type MenuItemProps = { title: string };
// Now with static ofType factory method, we can create our properly typed generic component.
// ofType is kind of an identity fucntion, returns the same implementation of Toggleable Component
// with proper props={...} type definition
const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>();

type ToggleableMenuProps = MenuItemProps;
const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({ title, children }) => (
  <ToggleableWithTitle component={() => <div>component injection</div>} props={{ title }}>
    {children}
  </ToggleableWithTitle>
);
