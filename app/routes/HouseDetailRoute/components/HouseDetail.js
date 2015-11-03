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

export default class  extends React.Component {

  render() {
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
          <span>东方国际大厦</span>
          <div>
            <img src={price}/>
            <span className="first">物业费</span>
            <span>11</span>
          </div>
          <div>
            <img src={position}/>
            <span className="first">浦东张江</span>
            <span>碧波路500号</span>
            <img className="more" src={more}/>
          </div>
        </div>
        <div className="rent">
          <span>
            共18套在租房源
          </span>
          <div className="rent-item">
            <SmallImg src={defaultImg} num={6}/>
            <div className="data area">
              <span>120</span>
              <span>m <sup>2</sup></span>
            </div>
            <div className="data price">
              <span>120</span>
              <span>m <sup>2</sup>元.天</span>
            </div>
            <img src={more}/>
          </div>
          <div className="rent-item">
            <SmallImg src={defaultImg} num={6}/>
            <div className="data area">
              <span>120</span>
              <span>m <sup>2</sup></span>
            </div>
            <div className="data price">
              <span>120</span>
              <span>m <sup>2</sup>元.天</span>
            </div>
            <img src={more}/>
          </div>
          <div className="more">
            查看更多
          </div>

        </div>
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
          <img src={phoneWhite}/><span>预约电话</span><span className="tel">4400000000</span>
        </footer>

      </div>
    )
  }

}
