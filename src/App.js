import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';

import CustomRouter from './components/CustomRouter';

import Home from './views/Home';
import News from './views/News';
import Chart from './views/Chart';

const App = () => {
  const history = createHashHistory();
  return (
    <Fragment>
      <h1>Welcome to Cripto World!</h1>
      <CustomRouter history={ history } >
        <nav>
          <Link to={ '/' }> Home </Link>
          <Link to={ '/news' }> News </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home history={ history } />} />
          <Route path="/news" element={<News />} />
          <Route path="/chart/:criptoId" element={<Chart />} />
        </Routes>
      </CustomRouter>
    </Fragment>
  );
};

export default App;
