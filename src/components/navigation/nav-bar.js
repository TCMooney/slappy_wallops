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
            <Link className='nav-link__home' to='/'>Home</Link>
            <Link className='nav-link__menu' to='/menu'>Menu</Link>
            <Link className='nav-link__blog' to='/blog'>Blog</Link>
            <Link className='nav-link__about' to='/about'>About</Link>
            <Link className='nav-link__contact' to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}