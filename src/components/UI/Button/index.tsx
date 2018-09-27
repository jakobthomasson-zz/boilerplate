import React, { MouseEvent, SFC } from 'react';
import { color } from 'styles';
import { withDefaultProps } from 'components/hoc';

// defaultProps are reflected and marked as optional within our type definition but stays required within implementation !
const defaultProps = {
  color: color.primary,
};

type DefaultProps = typeof defaultProps;

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void,
} & DefaultProps;

// SFC is just an alias of StatelseeComponent<P> and has pre-defined children and other things (defaultProps, displayName...)
const Button: SFC<Props> = ({ onClick: handleClick, children, color }) => (
  <button style={{ color }} onClick={handleClick}>{children}</button>
);

export default withDefaultProps(defaultProps, Button);
