import React, { MouseEvent, SFC } from 'react';
import styled from 'styled-components';
import { color } from 'styles';
import { withDefaultProps } from 'components/hoc';

const BaseButton = styled.button``;

const PrimaryButton = styled(BaseButton)``;
const SecondaryButton = styled(BaseButton)``;

// defaultProps are reflected and marked as optional within our type definition but stays required within implementation !

type Theme = 'primary' | 'secondary';
const defaultTheme: Theme = 'primary';

const defaultProps = {
  theme: defaultTheme,
};

type DefaultProps = typeof defaultProps;

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void,
} & DefaultProps;

// SFC is just an alias of StatelseeComponent<P> and has pre-defined children and other things (defaultProps, displayName...)
const Button: SFC<Props> = ({ onClick: handleClick, children, theme }) => (
  <button onClick={handleClick}>{children}</button>
);

export default withDefaultProps(defaultProps, Button);
