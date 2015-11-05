import React    from 'react';
import {Component} from 'react';
import {render} from "react-dom";
import { Provider, connect } from 'react-redux';
import {Router, Route, Link ,IndexRoute,Redirect} from 'react-router'
import { createStore, compose, combineReducers ,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createHistory } from 'history';
import {fetchBuildingsMiddleware,fetchRentMiddleware,releaseUnitMiddleware} from './middleware'
import building from './reducers/building'
import rent from './reducers/rent'
import release from './reducers/release'
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';






  //React.initializeTouchEvents(true);






const reducer = combineReducers({
  router: routerStateReducer,
  building:building,
  rent :rent,
  release:release
});

const store = compose(
  reduxReactRouter({createHistory}),
  applyMiddleware(
  thunkMiddleware,
  fetchBuildingsMiddleware,
  fetchRentMiddleware,
  releaseUnitMiddleware
  )
)(createStore)(reducer);

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/HouseDetailRoute'),
      require('./routes/EntrustRoute'),
      require('./routes/ReleaseRoute')

    ]
  } ]
}


class Root extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <ReduxRouter  routes={rootRoute}>

        </ReduxRouter>
      </Provider>
      </div>
    );
  }
}
render(<Root />, document.getElementById('root'));
