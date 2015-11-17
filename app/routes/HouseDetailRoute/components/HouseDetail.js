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
import {fetchBuilding,setCurrentBuilding,clearBuilding} from '../../../actions'
import { connect } from 'react-redux';
import Rent from './Rent';

@connect((state)=>{

  return {
    building:state.building.building,
    router:state.router
  }
  },
  (dispatch)=>{

  return {
    fetchBuilding: () => dispatch(fetchBuilding()),
    setCurrentBuilding:(id)=> dispatch(setCurrentBuilding(id)),
    clearBuilding:()=>dispatch(clearBuilding())
  }})
export default  class HouseDetail  extends React.Component {



  componentDidMount(){
    this.props.setCurrentBuilding(this.props.router.params.id)
    this.props.fetchBuilding()
  }
  componentWillUnmount(){
    this.props.clearBuilding()

  }

  render() {
    const {building} = this.props;
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
            <span>{building.propertyFee}元/m<sup>2</sup>.月</span>
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
            <span dangerouslySetInnerHTML={{__html:building.description}} ></span>
          </div>
        </section>
        <section>
          <h3>项目描述</h3>
          <ul>
            <li>
              <span>得房率:</span><span>{building.roomRate}</span>
            </li>
            <li>
              <span>总高:</span><span>{building.maxFloorCount}</span>
            </li>
            <li>
              <span>年代:</span><span>{building.buildYears}</span>
            </li>
            <li>
              <span>写字楼体量:</span><span>{building.officeVolume}</span>
            </li>
            <li>
              <span>开发商:</span><span>{building.developers}</span>
            </li>
            <li>
              <span>空调系统:</span><span>{building.aircondition}</span>
            </li>
            <li>
              <span>货梯:</span><span>{building.goodLiftCount}</span>
            </li>
            <li>
              <span>电梯:</span><span>{building.passengerLiftCount}</span>
            </li>
            <li>
              <span>地上停车位:</span><span>{building.parkingSpaceUp}</span>
            </li>
            <li>
              <span>地下停车位:</span><span>{building.parkingSpaceDown}</span>
            </li>
          </ul>
        </section>
        <a href={"tel:"+building.contactMobile}>
          <img src={phoneWhite}/><span>预约电话</span><span className="tel">{building.contactMobile}</span>
        </a>

      </div>
    )
  }

}
