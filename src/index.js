import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router , browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//adding promise in middleware to make sure that all reactions fall by promises before reaching the reducers

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
