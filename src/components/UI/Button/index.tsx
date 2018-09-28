import React, { MouseEvent, SFC, PureComponent } from 'react';
import styled from 'styled-components';
import { color } from 'styles';
import { withDefaultProps } from 'components/hoc';

// Styled components
const BaseButton = styled.button``;
const PrimaryButton = styled(BaseButton)`
  background-color: blue;
`;
const SecondaryButton = styled(BaseButton)`
  background-color: purple;
`;

// defaultProps are reflected and marked as optional within our type definition
// but stays required within implementation !

type Theme = | 'primary' | 'secondary';
const defaultTheme: Theme = 'primary';

const defaultProps = {
  theme: defaultTheme as Theme,
};

type DefaultProps = typeof defaultProps;

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void,
} & DefaultProps;

// shallow check if it should rerender
class Button extends PureComponent<Props> {

  renderButton() {
    const { children, theme, onClick } = this.props;
    switch (theme) {
      case 'primary': {
        return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
      }
      case 'secondary': {
        return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
      }
    }
  }

  render() {
    return this.renderButton();
  }

}
export default withDefaultProps(defaultProps, Button);
