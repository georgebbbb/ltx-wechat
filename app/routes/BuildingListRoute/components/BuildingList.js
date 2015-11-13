import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import Query from './Query';
import defaultImg from '../../../img/default_bb.png';
import ImageLoader from 'react-imageloader'
import {fetchBuildings}  from '../../../actions'
import Tappable from "react-tappable"
@connect((state)=>{
  return {
    buildings:state.building.buildings
  }
  },
  (dispatch)=>{
  return {
    fetchBuildings:()=>dispatch(fetchBuildings())
  }})
export default  class BuildingList extends React.Component {

  constructor(){
    super()
  }


  componentDidMount(){
    this.props.fetchBuildings()

    setTimeout(()=>{\
    },3000)

  }



  render() {
    console.log(this.props.buildings);
    return (
      <div className="buildingList">
        <header>
          <div>地图</div>
          <input placeholder="请输入楼盘名称"/>
        </header>
        <Query>
        </Query>
        <ul>
        {
          this.props.buildings.map((ele)=>{


            return (  <li key={ele.buildingId}>
                        <ImageLoader
                          src={ele.buildingImage}
                          wrapper={React.DOM.div}
                          preloader={()=>{
                            return <img src={defaultImg}></img>
                          }}>
                        </ImageLoader>
                        <footer>
                          <div>
                            <span>{ele.buildingName}</span>
                            <span className="fr sm">套房源</span>
                            <span className="fr">{ele.suitableNum}</span>
                          </div>
                          <div>
                            <span className="sm">{ele.buildingAddress}</span>
                            <span className="fr sm">元m<sup>2</sup>.天</span>
                            <span className="fr">{ele.averageRent}</span>
                          </div>
                        </footer>
                      </li>)
          })
        }
        </ul>






      </div>
    )
  }

}
