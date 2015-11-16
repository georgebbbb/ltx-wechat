import React from 'react'
import './HouseDetail.less'
import ImageLoader from 'react-imageloader'
import defaultImg from '../../../img/default_bb.png'
import SmallImg from './SmallImg.js'
import price from '../../../img/price.png'
import position from '../../../img/map-xiangqing.png'
import more from '../../../img/more.png'
import phoneRed from '../../../img/phone.png'
import phoneWhite from '../../../img/phone-white.png'
import {fetchBuilding} from '../../../actions'
import { connect } from 'react-redux';
import Rent from './Rent';

@connect((state)=>{
  return {building:state.building}
  },
  (dispatch)=>{

  return {
    fetchBuilding: () => dispatch(fetchBuilding())
  }})
export default  class HouseDetail  extends React.Component {



  fetchBuilding(){

    this.props.fetchBuilding()
  }

  componentDidMount(){

    this.fetchBuilding()

  }
  componentDidUpdate(){


  }

  render() {
    const {building} = this.props;
    console.log(building);

    return (
      <div className="house-detail">
        <div className="big-img">
          <ImageLoader
            src={defaultImg}
            wrapper={React.DOM.div}
            preloader={()=>{
              return <img src={defaultImg}></img>
            }}>
          </ImageLoader>
          <div className="num">6套</div>
        </div>
        <div className="detail">
          <span>{building.fullName}</span>
          <div>
            <img src={price}/>
            <span className="first">物业费</span>
            <span>11</span>
          </div>
          <div>
            <img src={position}/>
            <span className="first">{building.districtName}</span>

            <span>{building.address}</span>
            <img className="more" src={more}/>
          </div>
        </div>
        <Rent/>
        <section>
          <h3>项目描述</h3>
          <div>
            <span>今天天气的发生公司的施工事故的上市公司发个地方的施工事故闪光灯阿萨德个十分广泛受到广大粉丝多少个风格</span>
          </div>
        </section>
        <section>
          <h3>项目描述</h3>
          <ul>
            <li>
              <span>得房率:</span><span>80%</span>
            </li>
            <li>
              <span>得房率:</span><span>80%</span>
            </li>
            <li>
              <span>得房率:</span><span>80%</span>
            </li>
          </ul>
        </section>
        <footer>
          <img src={phoneWhite}/><span>预约电话</span><span className="tel">{building.contactMobile}</span>
        </footer>

      </div>
    )
  }

}
