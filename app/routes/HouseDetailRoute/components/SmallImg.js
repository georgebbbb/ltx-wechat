import React from 'react'
import './SmallImg.less'




export  class SmallImg extends React.Component {

  render() {
    return (
      <div className="small-img">
        <img src={this.props.src}/>
        <div className="num">
          {this.props.num}
        </div>
      </div>
    )
  }

}
