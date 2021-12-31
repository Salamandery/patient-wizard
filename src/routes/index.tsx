import React from 'react';
import { Switch as RoutesDom } from 'react-router-dom';
import Agendamento from '../pages/Agendamento';
import Route from './Route';

const Routes: React.FC = () => (
  <RoutesDom>
    <Route path="/" isPrivate={false} component={Agendamento} />
  </RoutesDom>
);

export default Routes;
