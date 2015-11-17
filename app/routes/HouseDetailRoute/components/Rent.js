import React from 'react'
import SmallImg from './SmallImg.js'
import {fetchBuilding} from '../../../actions'
import { connect } from 'react-redux';
import defaultImg from '../../../img/default_bb.png';
import more from '../../../img/more.png';
import {fetchRent} from '../../../actions'
@connect((state)=>{
  return {rent:state.rent}
  },
  (dispatch)=>{
  return {
    fetchRent: () => dispatch(fetchRent())
  }})
export default  class Rent  extends React.Component {

  fetchRent(){
    this.props.fetchRent()
  }

  componentDidMount(){
    this.fetchRent()

  }
  componentDidUpdate(){


  }

  render() {


    const {rent} = this.props

    const rents = rent.rents.map((e)=>{
      return (
        <div key={e.groupId} className="rent-item">
          <SmallImg src={e.unitImage} num={6}/>
          <div className="data area">
            <span>{e.unitArea}</span>
            <span>m <sup>2</sup></span>
          </div>
          <div className="data price">
            <span>{e.rent}</span>
            <span>m <sup>2</sup>元.天</span>
          </div>
          <img src={more}/>
        </div>)
    })

    return (
        <div className="rent">
          <span>
            共{rent.totalCount}套在租房源
          </span>
          {rents}
          <div className="more" onClick={this.fetchRent.bind(this)}>
            查看更多
          </div>
        </div>

    )
  }

}
