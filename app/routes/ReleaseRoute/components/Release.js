import React from 'react'
import { connect } from 'react-redux';


@connect((state)=>{
  return {}
  },
  (dispatch)=>{

  return {
    fetchBuilding: () => dispatch(fetchBuilding())
  }})
export default class  extends React.Component {




  componentDidMount(){


  }
  componentDidUpdate(){


  }

  render() {
    const {building} = this.props;

    return (
      <div className="release">
      <label className="two">城市</label>

      <select>
        <option>请选择</option>
        <option>上海</option>
        <option>苏州</option>
      </select>
      <label>楼盘名称</label>
      <input></input>
      <label className="two">面积</label>
      <input></input>
      <label className="two">租金</label>
      <input></input>
      <label>需求描述</label>
      <textarea placeholder="如：陆家嘴，带装修，进地铁"></textarea>
      <label className="two">称呼</label>
      <input></input>
      <label>手机/座机</label>
      <input></input>
      <div className="button">确定</div>
      </div>
    )
  }

}
