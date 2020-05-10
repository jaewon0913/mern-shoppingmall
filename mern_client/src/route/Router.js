import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, About, Top, Board } from './index';

const Router = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/top" component={Top} />
        <Route path="/board" component={Board} />
    </Switch>
);

export default Router;