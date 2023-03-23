/*import React, { forwardRef, ComponentType, PropsWithoutRef, ForwardedRef } from 'react';

export interface WithRefProps {
  forwardedRef?: ForwardedRef<unknown>;
}

export const withRef = <P extends WithRefProps>(WrappedComponent: ComponentType<P>) => {
  return forwardRef(
    (
      props: PropsWithoutRef<P> & { forwardedRef?: ForwardedRef<unknown> },
      ref: ForwardedRef<unknown>
    ) => {
      return <WrappedComponent forwardedRef={ref} />;
    }
  );
};
*/
