import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './../../components/ErrorFallback';

const CriptosDetails = React.lazy(() => import('CRIPTOS/CriptosDetails'));

export default function index () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <CriptosDetails />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
