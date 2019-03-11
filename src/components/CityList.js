import React, { Component } from 'react';
import City from './City.js';

class CityList extends Component {
  render() {
    console.log('CityList mounting');
    let cities = this.props.cities.map( (city) => {
      return (
        <City 
          key={city._id} 
          city={city}
          user={this.props.user} 
          loadCity={this.props.loadCity} 
        />
      )
    });

    return (
      <div className='tc mw5 center bg-white br3 pa3 pa3-ns mv5 ba b--black-10'>
      <ul className=''>
        {cities}
      </ul> 
      </div>
    );
  };
};

export default CityList;