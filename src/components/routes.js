import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ScanPage from '../pages/readQRCode';
import Map from '../components/map';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Map} />
        <Route path='/scan' component={ScanPage} />
        {/* <Route path='/map' component={Map} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;