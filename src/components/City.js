import React, { Component } from 'react';
import CityPage from './CityPage.js';

class City extends Component {
  render() {
    return (
      <div>
        <h5>City component</h5>
        <p>{this.props.city.cityName}</p>
        <button onClick={this.props.changeCity}>{this.props.city.cityName}</button>
        {/* <CityPage city={this.state.city} user={this.props.user} /> */}
      </div>
    );
  }
}

export default City;
