import React, { Component } from 'react';
import CityPage from './CityPage.js';

class City extends Component {
  // changeCity = (event) => {
  //   event.preventDefault();
  //   sessionStorage.clear();
  //   sessionStorage.setItem('currentCity', this.props.city._id);
  //   console.log(this.props.city);
  // };

  render() {
    return (
      <div>
        <h5>City component</h5>
        <p>{this.props.city.cityName}</p>
        <button onClick={this.changeCity}>{this.props.city.cityName}</button>
        <CityPage city={this.props.city} user={this.props.user} />
      </div>
    );
  }
}

export default City;
