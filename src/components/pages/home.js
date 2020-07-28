import React, { Component } from 'react';

import bumperCars from '../../../static/assets/images/home/bumper-cars.jpg';
import redChair from '../../../static/assets/images/home/red-chair.jpg';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='info-top'>
          <div className='top-left'>
            left
          </div>
          <div className='top-right' style={{
            backgroundImage: `url(${bumperCars})`
          }}>
          </div>
        </div>
        <div className='info-middle'>
          <div className='middle-left' style={{
            backgroundImage: `url(${redChair})`
          }}>
          </div>
          <div className='middle-right'>
            right
          </div>
        </div>
        <div className='info-bottom'>
          <div className='bottom-left'>
            left
          </div>
          <div className='bottom-center'>
            center
          </div>
          <div className='bottom-right'>
            rigth
          </div>
        </div>
      </div>
    )
  }
}

export default Home;