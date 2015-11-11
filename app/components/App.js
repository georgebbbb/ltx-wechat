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
      <div>
        <Link to="/houseDetail/77">detail</Link>
        <Link to="/entrust">entrust</Link>
        <Link to="/release">release</Link>
        <Link to="/buildingList">buildingList</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
