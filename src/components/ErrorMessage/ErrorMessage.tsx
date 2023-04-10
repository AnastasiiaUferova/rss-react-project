import React, { FC } from 'react';
import './ErrorMessage.css';
import { ErrorProps } from '../../types/types';

export const ErrorMessage: FC<ErrorProps> = (props: ErrorProps) => {
  return <div className="error">{props.errorMessage}</div>;
};
