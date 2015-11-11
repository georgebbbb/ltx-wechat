import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import Query from './Query'


@connect((state)=>{
  return {}
  },
  (dispatch)=>{
  return {
  }})
export  class PriceList  extends React.Component {

  constructor(){
    super()
    this.prices=[{
          min:0,
          max:"不限"
        },{
        min:0,
        max:1
      },
      {
        min:1,
        max:2
      },
      {
        min:2,
        max:3
      },
      {
        min:3,
        max:4
      },
      {
        min:4,
        max:5
      },
      {
        min:5,
        max:6
      },
      {
        min:6,
        max:7
      },
      {
        min:7,
        max:8
      },
      {
        min:8,
        max:9
      },
      {
        min:9,
        max:'不限'
      }
      ];
  }

  priceChange(e){

  }




  render() {
    const pricesEle = this.prices.map((ele,i)=>{
      if(i==0){
        return (
          <li key={i} onTouchEnd={this.priceChange.bind(this)} minPrice={ele.min} maxPrice={ele.max}>
            不限
          </li>
        )

      }else if(i==1){
        return (
          <li key={i} onTouchEnd={this.priceChange.bind(this)} minPrice={ele.min} maxPrice={ele.max}>
            1m<sup>2</sup>以下
          </li>
        )

      }else{
        return (
          <li key={i} onTouchEnd={this.priceChange.bind(this)} minPrice={ele.min} maxPrice={ele.max}>
          {ele.max=='不限'?(ele.min==0?"不限":"2000+"):ele.min+"-"+ele.max  }m<sup>2</sup>
          </li>
        )
      }




    })

    return (
      <div>
        <ul>
        {pricesEle}
        </ul>
      </div>
    )
  }

}
