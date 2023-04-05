import React, { FC } from 'react';
import './ErrorMessage.css';

type ErrorProps = {
  errorMessage?: string;
};

export const ErrorMessage: FC<ErrorProps> = (props: ErrorProps) => {
  return <div className="error">{props.errorMessage}</div>;
};
