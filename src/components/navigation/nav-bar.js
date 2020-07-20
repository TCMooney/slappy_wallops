import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          Slappy Wallop's Slap Shack
        </div>
        <div className='nav-right'>
          <div className='nav-list'>
            <Link to='/'>Home</Link>
            <Link to='/'>Menu</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}