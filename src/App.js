import React, { Fragment } from 'react';

// const CriptosList = React.lazy(() => import('MF1/CriptosList'));
// const CriptoChart = React.lazy(() => import('MF2/MF2'));
// const CriptoNews = React.lazy(() => import('MF3/CriptoNews'));

import CriptosList from 'MF1/CriptosList';
import CriptoChart from 'MF2/MF2';
// import CriptoNews from 'MF3/CriptoNews';

const App = () => {
  return (
    <Fragment>
      <CriptoChart />
    </Fragment>
  );
};

export default App;
