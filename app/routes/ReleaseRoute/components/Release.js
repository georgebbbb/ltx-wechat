import React from 'react'
import { connect } from 'react-redux';
import {releaseUnit} from '../../../actions'

@connect((state)=>{
  return {}
  },
  (dispatch)=>{

  return {
    releaseUnit: (query) => dispatch(releaseUnit(query))
  }})
export class Relaese extends React.Component {
  constructor(props){
    super(props)
    this.state={
      error:false,
      errorContent:""
    }
  }

  handleChange(e){
    const name = e.target.name
    console.log(e.target.value);
    this.state[name]=e.target.value;
    this.forceUpdate()
  }
  handleSave(e){
    if(this.state.cityId==null){
      this.setState({
        error:true,
        errorContent:"请填写楼盘所在城市"
      })
    } else if(this.state.buildingName==null){
      this.setState({
        error:true,
        errorContent:"请填写楼盘名称"
      })
    }else if(this.state.name==null){
      this.setState({
        error:true,
        errorContent:"请填写您的称呼"
      })
    }else if(this.state.tel==null){
      this.setState({
        error:true,
        errorContent:"请填写您的联系方式"
      })
    }else{
      this.setState({
        error:false,
        errorContent:""
      })
      const query = Object.assign({},this.state)
      delete query.error;
      delete query.errorContent;
      this.props.releaseUnit(query)
    }


  }

  componentDidMount(){


  }
  componentDidUpdate(){


  }

  render() {
    const {building} = this.props;

    return (
      <div className="release">
      <label className="two">城市</label>
      <select  onChange={this.handleChange.bind(this)} name="cityId" value={this.state.cityId}>
        <option value="">请选择</option>
        <option value="802">上海</option>
        <option value="867">苏州</option>
      </select>
      <label>楼盘名称</label>
      <input onChange={this.handleChange.bind(this)} name="buildingName" value={this.state.buildingName}></input>
      <label className="two">面积</label>
      <input onChange={this.handleChange.bind(this)} name="area" value={this.state.area}></input>
      <label className="two">租金</label>
      <input onChange={this.handleChange.bind(this)} name="price" value={this.state.price}></input>
      <label>需求描述</label>
      <textarea onChange={this.handleChange.bind(this)} name="des" value={this.state.des} placeholder="如：陆家嘴，带装修，进地铁"></textarea>
      <label className="two">称呼</label>
      <input onChange={this.handleChange.bind(this)} name="name" value={this.state.name}></input>
      <label>手机/座机</label>
      <input onChange={this.handleChange.bind(this)} name="tel" value={this.state.tel}></input>
      <div className="error">
        {this.state.error?<span>{this.state.errorContent}</span>:""}
      </div>
      <div className="button" onTouchEnd={this.handleSave.bind(this)}>确定</div>
      </div>
    )
  }

}
