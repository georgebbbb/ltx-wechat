import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import {fetchDistricts,fetchComms,setCurrentDistrict}  from '../../../actions'
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
    setCurrentDistrict:(id)=>dispatch(setCurrentDistrict(id))
  }})
export  class DistrictList  extends React.Component {

  constructor(){

    super()


  }



  componentDidMount(){

    this.props.fetchDistricts()

  }


  handleDistrictTouch(e){
    e.stopPropagation();
    this.props.onChange("district",e.target.innerText)
    this.props.setCurrentDistrict(e.target.getAttribute("data-id"))
    this.props.fetchComms()
  }
  handleCommTouch(e){
    this.props.onChange("district",e.target.innerText)

  }

  shouldComponentUpdate(nextProps,nextState){

    return true
  }

  render() {
    console.log(this.props.comms);
    return (
      <div>
        <ul className="district">
          {this.props.districts.map((e)=>{
            return <li key={e.id}>
                    <Tappable data-id={e.id} onTap={this.handleDistrictTouch.bind(this)} >{e.name}</Tappable>
                  </li>
          })}
        </ul>
        <ul className="comm">
          {this.props.comms.map((e)=>{
            return <li key={e.id} >
                    <Tappable data-id={e.id} onTap={this.handleDistrictTouch.bind(this)} >{e.name}</Tappable>
                  </li>
          })}
        </ul>
      </div>
    )
  }

}
