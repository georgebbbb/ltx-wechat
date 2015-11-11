import React from 'react'
import { connect } from 'react-redux';
import AreaList from "./AreaList";
import PriceList from "./PriceList"
import DistrictList from "./DistrictList"


@connect((state)=>{
  return {}
  },
  (dispatch)=>{
  return {
  }})
export class Query extends React.Component {



  constructor(){
    super()
    this.state={
        isOpen:false,
        districtName:null,
        areaName:null,
        priceName:null
      }
    }

  selectChange(e){
    this.setState({
      dropDown:e.target.getAttribute("name"),
      isOpen:true
    })
  }

  closeDropDown(e){
    e.stopPropagation();
    this.setState({
      isOpen:false
    })
  }
  handleChange(type,name){
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

  render() {

    const dropDown=function(that){
        switch (that.state.dropDown) {
          case "district":
            return <DistrictList onChange={that.handleChange.bind(that)}/>
          case "area":
            return <AreaList onChange={that.handleChange.bind(that)}/>
          case "price":
            return <PriceList onChange={that.handleChange.bind(that)}/>
          default:
            return null;
          }
    }(this)

    return (
        <div className="query">
          <div onTouchEnd={this.selectChange.bind(this)} name="district">
            {this.state.districtName||"区域"}
          </div>
          <div onTouchEnd={this.selectChange.bind(this)} name="area">
            {this.state.areaName||"面积"}
          </div>
          <div onTouchEnd={this.selectChange.bind(this)} name="price">
            {this.state.priceName||"租金"}
          </div>
          {this.state.isOpen?<div className="dropDown" onTouchEnd={this.closeDropDown.bind(this)}>{dropDown}</div>:null}
        </div>)
  }



}
