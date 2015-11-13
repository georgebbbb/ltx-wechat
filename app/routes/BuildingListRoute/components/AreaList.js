import React from 'react'
import { connect } from 'react-redux';
import Tappable from "react-tappable"
import {setArea}  from '../../../actions'
import {fetchBuildings}  from '../../../actions'
@connect((state)=>{
  return {

  }
  },
  (dispatch)=>{
  return {
    setArea:(min,max)=>dispatch(setArea(min,max)),
      fetchBuildings:()=>dispatch(fetchBuildings())
  }})
export default class AreaList extends React.Component {


    constructor(){
      super()
      this.areas=[
      {
      min:0,
      max:"不限"
      },{
      min:0,
      max:100
      },
      {
      min:100,
      max:200
      },
      {
      min:200,
      max:300
      },
      {
      min:300,
      max:500
      },
      {
      min:500,
      max:700
      },
      {
      min:700,
      max:1000
      }
      ,
      {
      min:1000,
      max:1500
      },
      {
      min:1500,
      max:2000
      },
      {
      min:2000,
      max:"不限"
      }]

    }

  areaChange(ele,e){

    this.props.onChange("area",e.target.innerText)
    ele.max=ele.max=="不限"?null:ele.max;
    this.props.setArea(ele.min,ele.max)
    this.props.fetchBuildings()
  }

  render() {
    const areasEle = this.areas.map((ele,i)=>{
      if(i==0){
        return(
                <Tappable key={i} component="li"   onTap={this.areaChange.bind(this,ele)}>不限</Tappable>
              );
      }else if(i==1){
        return(
          <Tappable key={i} component="li"   onTap={this.areaChange.bind(this,ele)}>100㎡以下</Tappable>
        )
      }else {
        return (
            <Tappable key={i} component="li"   onTap={this.areaChange.bind(this,ele)}>{ele.max=='不限'?(ele.min==0?"不限":"2000+"):ele.min+"-"+ele.max}㎡</Tappable>
        )
      }

    })
    return (
      <div>
        <ul>
          {areasEle}
        </ul>
      </div>
    )
  }

}
