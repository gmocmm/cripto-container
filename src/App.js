import React, { Fragment } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import News from './views/News';
import Chart from './views/Chart';

const App = () => {
  return (
    <Fragment>
      <h1>Welcome to Cripto World!</h1>
      <HashRouter>
        <nav>
          <Link to={ '/' }> Home </Link>
          <Link to={ '/news' }> News </Link>
          <Link to={ '/chart' }> Chart </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
};

export default App;
