import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './components/App'

const AppRouter = () => {
     return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
            </Switch>
        </BrowserRouter>
     );
 }

 export default AppRouter;
