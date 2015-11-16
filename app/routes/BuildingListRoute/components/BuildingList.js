import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import defaultImg from '../../../img/default_bb.png';
import ImageLoader from 'react-imageloader'
import {fetchBuildings,addBuildings}  from '../../../actions'
import Tappable from "react-tappable"
import AreaList from "./AreaList";
import PriceList from "./PriceList"
import DistrictList from "./DistrictList"


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
    this.state={
      isOpen:false,
      districtName:null,
      areaName:null,
      priceName:null,
      top:0,
      height:700
    }
  }


  componentDidMount(){
    this.props.fetchBuildings()
    this.setState({
      height : window.innerHeight-this.refs.list.offsetTop
    })
    this.refs.list.onscroll=(function(){
      // console.log(this.refs.list.scrollTop);
        if(window.innerHeight+this.refs.list.scrollTop+500>this.refs.last.offsetTop&&this.isAdd){
          this.isAdd=false;
          this.props.addBuildings()
        }
    }).bind(this)

  }


  render() {


    const dropDown=function(that){
        switch (that.state.dropDown) {
          case "district":
            return <DistrictList onChange={that._handleChange.bind(that)}/>
          case "area":
            return <AreaList onChange={that._handleChange.bind(that)}/>
          case "price":
            return <PriceList onChange={that._handleChange.bind(that)}/>
          default:
            return null;
          }
    }(this)

    const len = this.props.buildings.length;

    this.isAdd=true;

    return (
      <div className="buildingList">
        <header >
          <div>地图</div>
          <input placeholder="请输入楼盘名称"/>
        </header>
        <div className="query" ref="query">
          <div onTouchEnd={this._selectChange.bind(this,"district")}>
            {this.state.districtName||"区域"}
          </div>
          <div onTouchEnd={this._selectChange.bind(this,"area")}>
            {this.state.areaName||"面积"}
          </div>
          <div onTouchEnd={this._selectChange.bind(this,"price")}>
            {this.state.priceName||"租金"}
          </div>
        </div>
        <ul ref="list" style={{height:this.state.height,
          overflow:this.state.isOpen?"hidden":"auto"
        }}>
        {
          this.props.buildings.map((ele,i)=>{


            return (  <li key={ele.buildingId} ref={i+1==len?"last":i}>
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


        {this.state.isOpen?<Tappable style={{top:this.state.top}} ref="dropDown" component="div" className="dropDown" onTap={this._closeDropDown.bind(this)}>{dropDown}</Tappable>:null}

        </ul>


      </div>

    )
  }
  _selectChange(type,e){
    console.log(type);
    this.setState({
      dropDown:type,
      isOpen:true,
      top:this.refs.list.scrollTop
    })


  }

  _closeDropDown(e){
    e.stopPropagation();
    this.setState({
      isOpen:false
    })
  }

  _handleChange(type,name){
    switch (type) {
      case "district":
        this.setState({
          districtName:name
        })
        break;
      case "area":
        this.setState({
          areaName:name
        })
        break;
      case "price":
        this.setState({
          priceName:name
        })
        break;
      default:null
    }
  }
}
