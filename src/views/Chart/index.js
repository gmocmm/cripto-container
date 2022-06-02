import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';
import ErrorFallback from '../../components/ErrorFallback';

const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));
const MicroFrontendApp = React.lazy(() => import('GRAFHCRIPTOS/MicroFrontendApp'));

export default function Chart () {
  const { criptoId } = useParams();
  return (
    <Fragment>
      <Grid container spacing={1} style={{ marginTop: '1rem' }}>
        <Grid item xs={1} sm={1} md={1} xl={1} >
        </Grid>
        <Grid item xs={10} sm={10} md={10} xl={10} style={{ padding: '5px' }}>
          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <MicroFrontendApp asset={ criptoId } style={{ with: '100% !important' }}/>
            </ErrorBoundary>
          </React.Suspense>

        </Grid>

        <Grid item xs={1} sm={1} md={1} xl={1} >
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginTop: '2rem', possition: 'absolute', buttom: '0px' }}>
        <Grid item xs={1} sm={1} md={1} xl={1} >
        </Grid>

        <Grid item xs={10} sm={10} md={10} xl={10} style={{ padding: '5px' }}>
          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <CriptosNews items={criptoId} apiKeyNumber={3} />
            </ErrorBoundary>
          </React.Suspense>

        </Grid>

        <Grid item xs={1} sm={1} md={1} xl={1} >
        </Grid>
      </Grid>
    </Fragment>
  );
}
