import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import ErrorFallback from '../../components/ErrorFallback';

const MicroFrontendApp = React.lazy(() => import('GRAFHCRIPTOS/MicroFrontendApp'));

export default function News () {
  const { criptoId } = useParams();

  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <MicroFrontendApp asset={ criptoId } />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
