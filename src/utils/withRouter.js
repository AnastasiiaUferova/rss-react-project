import React from 'react';
import { useLocation } from 'react-router-dom';
export const withRouter = (WrappedComponent) => {
  return (props) => {
    const locationHook = useLocation();
    const propsWithRouter = {
      ...props,
      location: locationHook,
    };
    return React.createElement(WrappedComponent, { ...propsWithRouter });
  };
};
