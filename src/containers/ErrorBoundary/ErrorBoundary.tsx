import React, { FC, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';


const DefaultPage:FC = ({ children }) => {
  const [boundaryKey, setBoundaryKey ] = useState<number>(0);

  const ErrorFallbackUI  = () => {
    return (
      <div>this is error</div>
    );
  };

  return (
    <ErrorBoundary resetKeys={[boundaryKey]} FallbackComponent={ErrorFallbackUI}>
      {children}
    </ErrorBoundary>
  );
};

export default DefaultPage;
