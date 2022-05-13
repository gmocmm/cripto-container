import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));

export default function News () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <CriptosNews items="BTC" apiKeyNumber={1} />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
