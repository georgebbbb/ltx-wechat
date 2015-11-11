import React from 'react'
import { connect } from 'react-redux';



@connect((state)=>{
  return {

  }
  },
  (dispatch)=>{
  return {
  }})
export class AreaList extends React.Component {


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

  areaChange(e){
    console.log(978);
    this.props.onChange("area",e.target.innerText)
  }

  render() {
    const areasEle = this.areas.map((ele,i)=>{
      if(i==0){
        return(<li key={i}  onTouchEnd={this.areaChange.bind(this)} minArea={ele.min} maxArea={ele.max}>
                  不限
                </li>);
      }else if(i==1){
        return(
        <li key={i} onTouchEnd={this.areaChange.bind(this)} minArea={ele.min} maxArea={ele.max}>
                  100m<sup>2</sup>以下
                </li>)
      }else {
        return (
          <li key={i} onTouchEnd={this.areaChange.bind(this)} minArea={ele.min} maxArea={ele.max}>
          {
            ele.max=='不限'?(ele.min==0?"不限":"2000+"):ele.min+"-"+ele.max
          }m<sup>2</sup>
          </li>
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
