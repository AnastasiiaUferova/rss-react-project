import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(
  WrappedComponent: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const locationHook = useLocation();
    const paramsHook = useParams();
    const navigateHook = useNavigate();

    const propsWithRouter: Props = {
      ...(props as Props),
      location: locationHook,
      params: paramsHook,
      navigate: navigateHook,
    };

    return <WrappedComponent {...propsWithRouter} />;
  };
};
