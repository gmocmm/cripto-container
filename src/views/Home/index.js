import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {AppBar, Toolbar, Typography, Button, IconButton, Grid,
  Card, CardActions, CardContent   
} from '@mui/material';

import ErrorFallback from './../../components/ErrorFallback';

const CriptosDetails = React.lazy(() => import('CRIPTOS/CriptosDetails'));

export default function index () {
  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <>
          
            
      <Grid container width="100%" style={{padding: '2rem'}} spacing={2}>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ marginTop: '2rem', justifyContent: 'center', alignItems: 'center'}}>
          <Typography color='rgb(0, 127, 255)' variant="h2" component="div" >
            Start now!
          </Typography>
          <Typography color='black' variant="h3" component="div">
            Start building your cryptocurrency portfolio
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ marginTop: '2rem'}}>

          <CardContent style={{ borderRadius: '5px', background: 'rgb(0, 89, 178) 120%', height: '25rem', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" color="white" gutterBottom>
              Save your money
            </Typography>
            <Typography variant="h5" component="div" color="white">
              gdfgggd
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="white">
              adjective
            </Typography>
          </CardContent>
          {/* <CardActions style={{ borderRadius: '5px', background: 'rgb(0, 89, 178) 120%' }}>
            <Button size="small">Learn More</Button>
          </CardActions> */}

        </Grid>

      </Grid>



            {/* <CriptosDetails /> */}

          </>
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
