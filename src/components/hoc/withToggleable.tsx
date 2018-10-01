// Because we already created our Toggleable component with render callback
// functionallity, implementing HOC will be easy. (big advantage of the render callback pattern,
// we can leverage it for HOC implementation).

import React, { ComponentType, Component } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { utilHelpers } from 'helpers';

import { Toggleable, Props as ToggleableProps, ToggleableComponentProps } from 'components/common/Toggleable/ToggleableUsingComponentInjection';

// OwnProps is for any public props that should be available on internal Component.props
// and for WrappedCompoennt

type OwnProps = object;
type InjectedProps = ToggleableComponentProps;

const withToggleable = <OriginalProps extends object>(
  UnwrappedComponent: ComponentType<OriginalProps & InjectedProps>,
) => {
  // we are leveraging conditional mapped types to get proper final prop types
  type Props = Omit<OriginalProps, keyof InjectedProps> & OwnProps;

  class WithToggleable extends Component<Props> {
    static readonly displayName = utilHelpers.getHocComponentName(
      WithToggleable.displayName,
      UnwrappedComponent,
    );

    static readonly WrappedComponent = UnwrappedComponent;
    render() {
      return (
        <Toggleable render={renderProps => <UnwrappedComponent {...this.props} {...renderProps} />} />
      );
    }
  }

  return hoistNonReactStatics(WithToggleable, UnwrappedComponent);
};

export default withToggleable;
