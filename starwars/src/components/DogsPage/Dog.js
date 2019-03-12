import React, { Component } from 'react'

export default 
class Dog extends Component {
  render() { console.log(this.props)
    const { dog } = this.props.dog
    return ( 
      <div>
        <img src={require(dog)} alt=""/>
      </div>
    )
  }
}
