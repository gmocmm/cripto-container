import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

const CriptoNews = React.lazy(() => import('NEWSCRIPTOS/CriptoNews'));

export default function News () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <CriptoNews />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
