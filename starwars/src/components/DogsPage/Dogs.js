import React, { Component } from 'react';
import Dog from './Dog';

export default 
class Dogs extends Component {
  render() { console.log(this.props)
    return (
      <div>
            <Dog 
              dog = { this.props }
            />
      </div>
    )
  }
}
