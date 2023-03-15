import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export const withRouter = <Props extends WithRouterProps>(
  WrappedComponent: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const locationHook = useLocation();

    const propsWithRouter: Props = {
      ...(props as Props),
      location: locationHook,
    };

    return <WrappedComponent {...propsWithRouter} />;
  };
};
