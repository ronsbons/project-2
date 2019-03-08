import React, { Component } from 'react';
import CityPage from './CityPage.js';

class City extends Component {
  state = {
    city: this.props.city,
  };

  changeCity = (event) => {
    event.preventDefault();
    this.setState({
      // [] HOW TO GET CITYNAME FROM <A HREF>?
      city: event.target.textContent,
    });
  };

  render() {
    return (
      <div>
        <h5>City component</h5>
        <p>{this.state.city.cityName}</p>
        <button onClick={this.changeCity}>{this.props.city.cityName}</button>
        <CityPage city={this.state.city} user={this.props.user} />
      </div>
    );
  }
}

export default City;
