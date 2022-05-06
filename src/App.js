import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, IconButton, Grid,
  Card, CardActions, CardContent   
} from '@mui/material';

import Home from './views/Home';
import News from './views/News';


// const CriptoChart = React.lazy(() => import('MF2/MF2'));
// const CriptoNews = React.lazy(() => import('NEWSCRIPTOS/CriptoNews'));

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              =
            </IconButton>

            <Typography variant="h5" component="div" sx={{ marginRight: '10px', marginLeft: '10px' }}>
              Cripto World
            </Typography>
            <a href='/'>
              <Typography variant="h6" component="div" sx={{ marginRight: '10px', marginLeft: '10px'  }}>
                Home
              </Typography>
            </a>
            <Link to={ '/news' }>
              <Typography variant="h6" component="div" sx={{ marginRight: '10px' }}>
                News
              </Typography>
            </Link>
            
            <Button color="inherit" sx={{ position: 'absolute', right: '40px' }}>Login</Button>
          </Toolbar>
        </AppBar>

        {/* <nav> */}
          {/* <Link to={ '/' }> Home </Link> */}
          {/* <a href='/'> Home </a>

          <Link to={ '/news' }> News </Link> */}
        {/* </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
      
    </Fragment>
  );
};

export default App;
