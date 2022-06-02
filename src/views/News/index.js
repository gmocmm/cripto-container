import React, { Fragment, useRef, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../components/ErrorFallback';
import { mount } from 'helloVue/HelloVueApp';
import { Grid } from '@mui/material';

const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));

export default function News () {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <>
      <Grid container spacing={1} style={{ marginTop: '1rem' }}>
        <Grid item xs={1} sm={1} md={1} xl={1} ></Grid>
        <Grid item xs={10} sm={10} md={10} xl={10} style={{ padding: '5px' }} >
          <div ref={ref} />
        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} ></Grid>
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
              <CriptosNews items="BTC" apiKeyNumber={3} />
              {/* <CriptosList history={ history } /> */}

              {/* <AngularApp/> */}
            </ErrorBoundary>
          </React.Suspense>
        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} ></Grid>
      </Grid>
    </>
  );
};
