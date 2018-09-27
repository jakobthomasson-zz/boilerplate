import React, { MouseEvent, ReactNode, SFC } from 'react';

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void,
};

// SFC is just an alias of StatelseeComponent<P> and has pre-defined children and other things (defaultProps, displayName...)

const Button: SFC<Props> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);

export default Button;
