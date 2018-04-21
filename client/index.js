import React from 'react';
import { render } from 'react-dom';

import {AppContainer} from 'react-hot-loader';
import {browserHistory, BrowserRouter as Router, Route} from 'react-router-dom';

import {Provider} from 'react-redux';

import routes from './routes';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import AppRouter from './AppRouter'
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';
/*
render(
  <BrowserRouter>
  <div>
  <Route exact path="/" component={App}/>
  <IndexRoute component ={Greetings}/>
</div>
  </BrowserRouter>
  , document.getElementById('app'));

*/
/*
render(
  <Router history={browserHistory} routes={routes}/>
  , document.getElementById('app'));
*/
/*
render(
  <AppRouter/>
  , document.getElementById('app'));*/
const store = createStore(
(state ={}) => state,
applyMiddleware(thunk)
);



render(
  (
    <Provider store = {store}>
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Greetings} />
      <Route path="/signup" component={SignupPage} />
    </div>
  </Router>
  </Provider>
)
  , document.getElementById('app'));
