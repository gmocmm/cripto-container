import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {AppBar, Toolbar, Typography, Button, IconButton, Grid,
  Card, CardActions, CardContent   
} from '@mui/material';

import ErrorFallback from './../../components/ErrorFallback';

const CriptosList = React.lazy(() => import('CRIPTOS/CriptosList'));

export default function index ({ history }) {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <CriptosList history={ history } />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
