import React, { Component } from 'react';
import City from './City.js';

class CityList extends Component {
  render() {
    let cities = this.props.cities.map( (city) => {
      return (
        <City 
          key={city._id} 
          city={city}
          user={this.props.user} />
      )
    });

    return (
      <ul>
        {cities}
      </ul> 
    );
  }
}

export default CityList;