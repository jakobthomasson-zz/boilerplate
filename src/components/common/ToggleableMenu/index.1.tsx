import React, { SFC, Component } from 'react';
import Toggleable, { ToggleableComponentProps } from '../Toggleable';
type Props = { title: string };

class ToggleableMenu extends Component {
  render() {
    return (
      <>
        <ToggleableMenuItem title="First Menu">Some Content</ToggleableMenuItem>
        <ToggleableMenuItem title="Second Menu">Some Content</ToggleableMenuItem>
        <ToggleableMenuItem title="Third Menu">Some Content</ToggleableMenuItem>

        <InjectedToggleableMenuItem title="First Injected Menu">Some Content</InjectedToggleableMenuItem>
        <InjectedToggleableMenuItem title="Second Injected Menu">Some Content</InjectedToggleableMenuItem>
        <InjectedToggleableMenuItem title="Third Injected Menu">Some Content</InjectedToggleableMenuItem>
      </>
    );
  }
}

const ToggleableMenuItem: SFC<Props> = ({ title, children }) => (
  <Toggleable
    render={({ show, toggle }) => (
      <>
        <div onClick={toggle}>
          <h1>{title}</h1>
        </div>
        {show ? children : null}
      </>
    )}
  />
);

// Component injection pattern
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

type InjectedToggleableMenuItemProps = { title: string };
const InjectedToggleableMenuItem: SFC<InjectedToggleableMenuItemProps> = ({ title, children }) => (
  <Toggleable
    render={({ show, toggle }) => (
      <InjectedItem show={show} toggle={toggle} title={title}>
        {children}
      </InjectedItem>
    )}
  />
);

export default ToggleableMenu;
