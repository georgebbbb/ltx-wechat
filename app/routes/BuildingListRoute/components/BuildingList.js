import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import defaultImg from '../../../img/default_bb.png';
import ImageLoader from 'react-imageloader'
import {fetchBuildings,addBuildings}  from '../../../actions'
import Tappable from "react-tappable"
import AreaList from "./AreaList";
import PriceList from "./PriceList";
import DistrictList from "./DistrictList";
import arrow from "../../../img/arrow.png";
import {Link} from 'react-router';
import mapImg from "../../../img/map-xiangqing.png";

@connect((state)=>{
  return {
    buildings:state.building.buildings,
    isBottom:state.building.isBottom,
    building:state.building.building
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
      top:300,
      height:700
    }

  }


  componentDidMount(){
    //若果是会退回去的
    if(this.props.buildings.length>0){
        this.refs.list.scrollTop=this.refs[this.props.building.id].parentElement.offsetTop;
    }else {
      this.props.fetchBuildings()
    }
    this.setState({
      height : window.innerHeight-this.refs.list.offsetTop
    })
    this.refs.list.onscroll=(function(){

        if(window.innerHeight+this.refs.list.scrollTop+300>this.refs.list.lastChild.offsetTop&&this.isAdd){
          this.isAdd=false;
          this.props.addBuildings()
        }
    }).bind(this)
    // window.scroll=function(){
    //   alert(121)
    // }

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
          <div><img src={mapImg}/> 地图</div>
          <input placeholder="请输入楼盘名称"/>
        </header>
        <div className="query" ref="query">
          <div onTouchStart={this._selectChange.bind(this,"district")}>
            {this.state.districtName||"区域"} <img src={arrow}></img>
          </div>
          <div onTouchStart={this._selectChange.bind(this,"area")}>
            {this.state.areaName||"面积"}  <img src={arrow}></img>
          </div>
          <div onTouchStart={this._selectChange.bind(this,"price")}>
            {this.state.priceName||"租金"} <img src={arrow}></img>
          </div>
        </div>
        <ul ref="list" style={{height:this.state.height,
          overflow:this.state.isOpen?"hidden":"auto"
        }}>
        {
          this.props.buildings.map((ele,i)=>{


            return (  <Link  to={`/houseDetail/${ele.buildingId}`}  key={ele.buildingId} style={{
              marginBottom:(i+1)==this.props.buildings.length?"120px":"0px"
            }}>
                        <ImageLoader
                          src={ele.buildingImage}
                          wrapper={React.DOM.div}
                          preloader={()=>{
                            return <img src={defaultImg}></img>
                          }}>
                        </ImageLoader>

                        <footer ref={ele.buildingId}>
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
                      </Link>)
          })
        }


        {this.state.isOpen?<Tappable ref="dropDown" style={{top:this.state.top}} component="div" className="dropDown" onTap={this._closeDropDown.bind(this)}>{dropDown}</Tappable>:null}

        <footer>
        {
          this.props.isBottom?"Oops,页面到底了！":"加载中。。。。"
        }
        </footer>
        </ul>



      </div>

    )
  }
  _selectChange(type,e){
    this.setState({
      dropDown:type,
      isOpen:true,
      top:this.refs.list.offsetTop
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
