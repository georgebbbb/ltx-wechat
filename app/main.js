import React    from 'react';
import {Component} from 'react';
import {render} from "react-dom";
import { Provider, connect } from 'react-redux';
import {Router, Route, Link ,IndexRoute,Redirect} from 'react-router'
import { createStore, compose, combineReducers ,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createHistory } from 'history';
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';






@connect((state) => ({}))
class App extends Component {

  constructor(props) {
    super(props);
    console.log(props,77777);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }

  render() {
    const links = [
      '/',
      '/parent?foo=bar',
      '/parent/child?bar=baz',
      '/parent/child/123?baz=foo'
    ].map(l =>
      <p>
        <Link to={l}>{l}</Link>
      </p>
    );

    return (
      <div>
        <h1>App Container</h1>
        {links}

        <a href="#" onClick={this.handleClick}>
          /parent/child/custom
        </a>
        {this.props.children}
      </div>
    );
  }
}

// let Main = connect(
//   (state)=>{
//     console.log(state,999);
//     return {ok:"5555"}
//   }
// )(App);



class Parent extends Component {
  render() {
    console.log(this.props,444);
    return (
      <div>
        <h2>Parent</h2>
        {this.props.children}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    console.log(this.props,8999);
    const { params: { id }} = this.props;

    return (
      <div>
        <h2>Child</h2>
        {id && <p>{id}</p>}
      </div>
    );
  }
}

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({createHistory}),
  applyMiddleware(
  thunkMiddleware,
  )
)(createStore)(reducer);

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Messages'),
      require('./routes/List')
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
