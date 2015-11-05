import React from 'react'



// <Link to="/list">list</Link>
// <Link to="/messages">messages</Link>
export default extends React.Component {
  render() {
    return (
      <div className="tip">
        {this.props.value}
      </div>
    )
  }
}
