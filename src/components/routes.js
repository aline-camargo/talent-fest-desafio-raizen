import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ScanPage from '../pages/scanPage';
import MapPage from '../pages/mapPage';
import Checked from '../pages/checked';
import InfoPage from '../pages/info';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MapPage} />
        <Route path='/scan' component={ScanPage} />
        <Route path='/goodtrip' component={Checked} />
        <Route path='/info' component={InfoPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;