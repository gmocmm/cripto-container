import React, { Fragment, useRef, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Typography, Grid, Card, CardActions, CardContent } from '@mui/material';
import ErrorFallback from './../../components/ErrorFallback';
import { mount } from 'helloVue/HelloVueApp';

const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));
const CriptosList = React.lazy(() => import('CRIPTOS/CriptosList'));

export default function index ({ history }) {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <Fragment>
      <Grid container spacing={1} style={{ marginTop: '2rem' }} >
        <Grid item xs={1} sm={1} md={1} xl={1} >
        </Grid>

        <Grid item xs={5} sm={5} md={5} xl={5} >
          <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center" style={{ padding: '2rem' }} >
            <Typography variant="h3" gutterBottom component="div" color="primary" >
              Crypto World!
            </Typography>
            <Typography variant="h4" gutterBottom component="div" color="secundary">
              Start building your cryptocurrency wallet
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div" color="secundary">
              Crypto world is the easiest for explore the wide world of cryptocurrencies.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={5} sm={5} md={5} xl={5}>
          <div ref={ref} />
        </Grid>

        <Grid item xs={1} sm={1} md={1} xl={1} >
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginTop: '1rem' }} >
        <Grid item xs={1} sm={1} md={1} xl={1} ></Grid>

        <Grid item xs={10} sm={10} md={10} xl={10} style={{ padding: '5px' }} >
          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <CriptosList history={ history } />
            </ErrorBoundary>
          </React.Suspense>
        </Grid>

        <Grid item xs={1} sm={1} md={1} xl={1} ></Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginTop: '2rem', possition: 'absolute', buttom: '0px' }}>
        <Grid item xs={1} sm={1} md={1} xl={1} ></Grid>

        <Grid item xs={10} sm={10} md={10} xl={10} >
          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <CriptosNews items="BTC" apiKeyNumber={3} />
            </ErrorBoundary>
          </React.Suspense>
        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} > </Grid>
      </Grid>
    </Fragment>
  );
}
