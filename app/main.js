import 'babel-core/polyfill';
import React    from 'react';
import {Component} from 'react';
import {render} from "react-dom";
import { Provider, connect } from 'react-redux';
import {Router, Route, Link ,IndexRoute,Redirect} from 'react-router'
import { createStore, compose, combineReducers ,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createHistory } from 'history';
import {
  fetchBuildingMiddleware,
  fetchRentMiddleware,
  releaseUnitMiddleware,
  fetchDistrictsMiddleware,
  fetchCommsMiddleware,
  fetchBuildingsMiddleware
} from './middleware'
import building from './reducers/building'
import rent from './reducers/rent'
import release from './reducers/release'
import query from './reducers/query';

import app from './components/App.js'
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';
import HouseDetailRoute from './routes/HouseDetailRoute';
import EntrustRoute from './routes/EntrustRoute';
import ReleaseRoute from './routes/ReleaseRoute';
import BuildingListRoute from './routes/BuildingListRoute';






  //React.initializeTouchEvents(true);






const reducer = combineReducers({
  router: routerStateReducer,
  building:building,
  rent :rent,
  release:release,
  query:query
});

const store = compose(

  applyMiddleware(
  thunkMiddleware,
  fetchBuildingMiddleware,
  fetchRentMiddleware,
  releaseUnitMiddleware,
  fetchDistrictsMiddleware,
  fetchCommsMiddleware,
  fetchBuildingsMiddleware,

),
  reduxReactRouter({createHistory})
)(createStore)(reducer);





const rootRoute = {
  component: 'div',
  childRoutes: [
    {
     path: '/',
     component: app,
     childRoutes: [
       HouseDetailRoute,
       EntrustRoute,
       ReleaseRoute,
       BuildingListRoute
     ]
    }
  ]
}

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter  routes={rootRoute}></ReduxRouter>
        </Provider>
      </div>
    );
  }
}
render(<Root />, document.getElementById('root'));
