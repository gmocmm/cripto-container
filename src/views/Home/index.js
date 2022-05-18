import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Routes, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';
import CustomRouter from './../../components/CustomRouter';

import {AppBar, CardMedia, Typography, Button, IconButton, Grid,
  Card, CardActions, CardContent   
} from '@mui/material';


import Chart from './../Chart';
const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));


import ErrorFallback from './../../components/ErrorFallback';

const CriptosList = React.lazy(() => import('CRIPTOS/CriptosList'));

export default function index ({ history }) {
  return (
    <Fragment>
      <Grid container spacing={1} style={{ marginTop: '2rem'}} >
        <Grid item xs={1} sm={1} md={1} xl={1}  >
          
        </Grid>
        <Grid item xs={10} sm={10} md={5} xl={5} >
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
        <Grid item xs={10} sm={10} md={5} xl={5} >
          <Grid container spacing={1}  direction="row" justifyContent="center" alignItems="center" >
          
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.criptonoticias.com/wp-content/uploads/2022/04/bitcoin-2-1140x570.png"
                alt="bitcoin"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bitcoin is a cryptocurrency and a payment system with no central bank or single administrator.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={ '/chart/BTC' } style={{ textDecoration: 'none' }}  >
                  <Button size="small">show</Button>
                </Link>

              </CardActions>
            </Card>
          </Grid>
        
        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1}  >
          
        </Grid>
       
        
      </Grid>

      <Grid container spacing={1} style={{ marginTop: '1rem'}}>
        <Grid item xs={1} sm={1} md={1} xl={1}  >
          
        </Grid>
        <Grid item xs={10} sm={10} md={10} xl={10} style={{padding: '5px'}}>

          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <CriptosList history={ history } style={{with: '100% !important'}}/>
            </ErrorBoundary>
          </React.Suspense>

        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} >
          
        </Grid>
        
      </Grid>

      <Grid container spacing={1} style={{ marginTop: '2rem', possition: 'absolute', buttom: '0px'}}>
        <Grid item xs={1} sm={1} md={1} xl={1}  >
          
        </Grid>

        <Grid item xs={10} sm={10} md={10} xl={10} >

          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <CriptosNews items="BTC" apiKeyNumber={2} />
              {/* <CriptosList history={ history } /> */}

              {/* <AngularApp/> */}
            </ErrorBoundary>
          </React.Suspense>

        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} >
          
        </Grid>
        
      </Grid>

      <Routes>
         
          <Route path="/chart/:criptoId" element={<Chart />} />
        </Routes>
    </Fragment>
  );
}
