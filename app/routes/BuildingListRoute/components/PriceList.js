import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import Tappable from "react-tappable"
import {setPrice}  from '../../../actions'
import {fetchBuildings}  from '../../../actions'
@connect((state)=>{
  return {}
  },
  (dispatch)=>{
  return {
     setPrice:(min,max)=>dispatch(setPrice(min,max)),
    fetchBuildings:()=>dispatch(fetchBuildings())
  }})
export default  class PriceList  extends React.Component {

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

      setTimeout((()=>{
        this.__priceChange=function(ele,e){

          this.props.onChange("price",e.target.innerText)
          ele.max=ele.max=="不限"?null:ele.max;
          this.props.setPrice(ele.min,ele.max)
          this.props.fetchBuildings()

        }

      }).bind(this),600)
  }



  _priceChange(ele,e){

    if(this.__priceChange){
      this.__priceChange(ele,e)
    }else {
      e.stopPropagation()
    }

  }


  render() {
    const pricesEle = this.prices.map((ele,i)=>{

      if(i==0){

        return (

            <Tappable   key={i} component="li" onTap={this._priceChange.bind(this,ele)}>不限</Tappable>

        )

      }else if(i==1){
        return (
          <Tappable   key={i} component="li" onTap={this._priceChange.bind(this,ele)}>1元/㎡.天以下</Tappable>
        )

      }else{
        return (
          <Tappable   key={i} component="li" onTap={this._priceChange.bind(this,ele)}>{ele.max=='不限'?(ele.min==0?"不限":"9+"):ele.min+"-"+ele.max  }元/㎡.天</Tappable>

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
