import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import News from './views/News';

// const CriptoChart = React.lazy(() => import('MF2/MF2'));
// const CriptoNews = React.lazy(() => import('NEWSCRIPTOS/CriptoNews'));

const App = () => {
  return (
    <Fragment>
      <h1>Welcome to Cripto World!</h1>

      <BrowserRouter>
        <nav>
          {/* <Link to={ '/' }> Home </Link> */}
          <a href='/'> Home </a>

          <Link to={ '/news' }> News </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
