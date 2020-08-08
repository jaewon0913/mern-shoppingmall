import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { List, Update, Product } from './ManagerIndex';

const ManagerRouter = () => (
    <Switch>
        <Route path="/list" exact component={List} />
        <Route path="/update/:id" component={Update} />
        <Route path="/product" component={Product} />
    </Switch>
);

export default ManagerRouter;