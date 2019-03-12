import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div style = { container }>
        <h1><Link to="/" style = { link }>React Wars</Link>&nbsp;|&nbsp;<Link to="/dogs" style = { link }>Dogs</Link></h1>
      </div>
    )
  }
}

const container = { 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const link = {
  textDecoration: 'none',
  color: '#443e3e',
  textShadow: '1px 1px 5px #fff',
  cursor: 'pointer'
}