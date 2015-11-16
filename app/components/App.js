import React from 'react'
import {Link}  from 'react-router'
import 'normalize.css'
import './App.less'
import HouseDetail from '../routes/HouseDetailRoute/components/HouseDetail'


// <Link to="/list">list</Link>
// <Link to="/messages">messages</Link>
export default class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>




    )
  }
}
