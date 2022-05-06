import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

const CriptosNewsDetails = React.lazy(() => import('NEWSCRIPTOS/CriptosNewsDetails'));

export default function News () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <CriptosNewsDetails />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
