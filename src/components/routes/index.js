import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/homePage';
import ProductPage from '../../pages/productPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/product" component={ProductPage} />
            </Switch>
        </Router>
    );
};
export default Routes;
