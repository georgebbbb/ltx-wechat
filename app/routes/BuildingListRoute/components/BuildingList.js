import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import {Query} from './Query';
import defaultImg from '../../../img/default_bb.png';

@connect((state)=>{
  return {}
  },
  (dispatch)=>{
  return {
    }})
export  class BuildingList extends React.Component {

  constructor(){
    super()
  }


  componentDidMount(){


  }
  componentDidUpdate(){


  }


  render() {

    return (
      <div className="buildingList">
        <header>
          <div>地图</div>
          <input placeholder="请输入楼盘名称"/>
        </header>
        <Query>
        </Query>
        <ul>
          <li>
            <img src={defaultImg}></img>
            <footer>
              333
            </footer>
          </li>
          <li>
            <img src={defaultImg}></img>
            <footer>
              333
            </footer>
          </li>
        </ul>
      </div>
    )
  }

}
