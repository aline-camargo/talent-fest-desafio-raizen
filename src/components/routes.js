import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ScanPage from '../pages/scanPage';
import Map from '../components/map';
import Checked from '../pages/checked';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Map} />
        <Route path='/scan' component={ScanPage} />
        <Route path='/goodtrip' component={Checked} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;