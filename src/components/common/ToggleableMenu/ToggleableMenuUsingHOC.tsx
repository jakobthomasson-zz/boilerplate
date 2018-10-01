import React, { SFC, Component } from 'react';
import { Toggleable, ToggleableComponentProps } from '../Toggleable/ToggleableUsingComponentInjection';
import { withToggleable } from '../../hoc';

type MenuItemProps = { title: string };
// const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>();

type ToggleableMenuProps = MenuItemProps;
const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({ title, children }) => (
  <Toggleable<MenuItemProps>
    component={InjectedItem}
    props={{ title }}>
    {children}
  </Toggleable>
);

type InjectedProps = { title: string }; // & ToggleableComponentProps works too
const InjectedItem: SFC<InjectedProps & ToggleableComponentProps> = ({
  title,
  toggle,
  show,
  children,
}) => (
  <>
      <div onClick={toggle}>
        <h1>{title}</h1>
      </div>
      {show ? children : null}
    </>
  );

class ToggleableMenu extends Component {
  render() {
    return (
      <>
        <ToggleableMenuViaHoc title="First Menu">Some Content</ToggleableMenuViaHoc>
        <ToggleableMenuViaHoc title="Second Menu">Some Content</ToggleableMenuViaHoc>
        <ToggleableMenuViaHoc title="Third Menu">Some Content</ToggleableMenuViaHoc>
      </>
    );
  }
}

export default ToggleableMenu;

const ToggleableMenuViaHoc = withToggleable(InjectedItem);
