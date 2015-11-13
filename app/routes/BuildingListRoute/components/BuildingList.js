import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import Query from './Query';
import defaultImg from '../../../img/default_bb.png';
import ImageLoader from 'react-imageloader'
import {fetchBuildings,addBuildings}  from '../../../actions'
import Tappable from "react-tappable"
@connect((state)=>{
  return {
    buildings:state.building.buildings
  }
  },
  (dispatch)=>{
  return {
    fetchBuildings:()=>dispatch(fetchBuildings()),
    addBuildings  :()=>dispatch(addBuildings())
  }})
export default  class BuildingList extends React.Component {

  constructor(){
    super()
    this.isAdd=true;
  }


  componentDidMount(){
    this.props.fetchBuildings()

    // setTimeout(()=>{
    //     this.props.addBuildings()
    // },3000)
    const props = this.props
    window.onscroll=(function(){
      // console.log(document.body.scrollTop);
      // console.log(this.refs.last.offsetTop)
      // console.log(window.innerHeight);
      if(window.innerHeight+document.body.scrollTop+300>this.refs.last.offsetTop&&this.isAdd){
        this.isAdd=false;
        this.props.addBuildings()
      }
    }).bind(this)

  }



  render() {
    console.log(99999,this.props.buildings);
    const len = this.props.buildings.length;

    this.isAdd=true;

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
          this.props.buildings.map((ele,i)=>{


            return (  <li key={i} ref={i+1==len?"last":i}>
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
