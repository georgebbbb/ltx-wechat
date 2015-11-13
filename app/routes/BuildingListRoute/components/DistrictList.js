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


  }



  componentDidMount(){

    this.props.fetchDistricts()

  }


  handleDistrictTouch(ele,e){
    e.stopPropagation();
    this.props.onChange("district",e.target.innerText)
    this.props.setCurrentDistrict(ele.id)
    this.props.fetchComms()
  }
  handleCommTouch(ele,e){
    this.props.onChange("district",e.target.innerText)
    this.props.setCurrentComm(ele.id)
    this.props.fetchBuildings()

  }


  render() {

    return (
      <div>
        <ul className="district">
          {this.props.districts.map((e)=>{
            return <Tappable  key={e.id} component="li" onTap={this.handleDistrictTouch.bind(this,e)} >{e.name}</Tappable>

          })}
        </ul>
        <ul className="comm">
          {this.props.comms.map((e)=>{

           return  <Tappable component="li" key={e.id}  onTap={this.handleCommTouch.bind(this,e)} >{e.name}</Tappable>

          })}
        </ul>
      </div>
    )
  }

}
