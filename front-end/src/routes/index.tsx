import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/HomePage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
