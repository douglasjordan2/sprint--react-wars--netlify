import React, { Component } from 'react';
import Dog from './Dog';

export default 
class DogList extends Component {
  state = {
    images: []
  }

  render() { 
    const { url, dogs, index } = this.props.dogs
    //this.getImages(`${url}${dogs[index]}/images`)
    console.log(this.state.images)
    return (
      <div>
        <img src = {require(`${url}${dogs[index]}/images`)} alt=""/>
      </div>
    )
  }
}
