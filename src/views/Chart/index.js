import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

const MicroFrontendApp = React.lazy(() => import('GRAFHCRIPTOS/MicroFrontendApp'));

export default function News () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <MicroFrontendApp asset={'SOL'} />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
