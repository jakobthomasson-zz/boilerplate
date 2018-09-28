import React, { SFC, Component } from 'react';
import Toggleable from '../Toggleable';

type Props = { title: string };

class ToggleableMenu extends Component {
  render() {
    return (
      <>
        <ToggleableMenuItem title="First Menu">Some Content</ToggleableMenuItem>
        <ToggleableMenuItem title="Second Menu">Some Content</ToggleableMenuItem>
        <ToggleableMenuItem title="Third Menu">Some Content</ToggleableMenuItem>
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

export default ToggleableMenu;
