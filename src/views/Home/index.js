import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './../../components/ErrorFallback';

const CriptosList = React.lazy(() => import('CRIPTOS/CriptosList'));

export default function index () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <CriptosList />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
