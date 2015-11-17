import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import {fetchDistricts,fetchComms,setCurrentDistrict,setCurrentComm,fetchBuildings}  from '../../../actions'
import Tappable from "react-tappable"


@connect((state)=>{
  return {
    districts:state.query.city.districts,
    comms:state.query.city.district.comms,
  }
  },
  (dispatch)=>{
  return {
    fetchDistricts:function(){
      dispatch(fetchDistricts())
    },
    fetchComms:function(){
      dispatch(fetchComms())
    },
    setCurrentDistrict:(id)=>dispatch(setCurrentDistrict(id)),
    setCurrentComm:(id)=>dispatch(setCurrentComm(id)),
    fetchBuildings:()=>dispatch(fetchBuildings())
  }})
export  default class DistrictList  extends React.Component {

  constructor(){

    super()

    this.state={

    }
    setTimeout((()=>{
      this.__handleDistrictTouch=function(ele,e){
        if(ele.id){
          e.stopPropagation();
          this.props.onChange("district",e.target.innerText)
          this.props.setCurrentDistrict(ele.id)
          this.props.fetchComms()
          this.setState({
            districtId:ele.id
          })
        }else {
          this.props.onChange("district",e.target.innerText)
          this.props.setCurrentDistrict(ele.id)
          this.props.setCurrentComm(null)
          this.props.fetchBuildings()
        }
      }
      this.__handleCommTouch=function(ele,e){
        console.log(888);
        this.props.onChange("district",e.target.innerText)
        this.props.setCurrentComm(ele.id)
        this.props.fetchBuildings()
      }

    }).bind(this),600)


  }
  componentDidMount(){

  this.props.fetchDistricts()

  }


  _handleCommTouch(ele,e){
    if(this.__handleCommTouch){
      this.__handleCommTouch(ele,e)
    }
  }

  _handleDistrictTouch(ele,e){
    if(this.__handleDistrictTouch){
      this.__handleDistrictTouch(ele,e)
    }else {
      e.stopPropagation();
    }
  }







  render() {


    return (
      <div>
        <ul className="district">
          {this.props.districts.map((e)=>{
            return <Tappable  key={e.id} component="li" className={e.id == this.state.districtId? "active":null} onTap={this._handleDistrictTouch.bind(this,e)} >{e.name}</Tappable>

          })}
        </ul>
        {
          this.state.districtId?<ul className="comm">
                    {this.props.comms.map((e)=>{

                     return  <Tappable component="li" key={e.id}  onTap={this._handleCommTouch.bind(this,e)} >{e.name}</Tappable>

                    })}
                  </ul>:null
        }
      </div>
    )
  }

}
