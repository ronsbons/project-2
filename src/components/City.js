import React, { Component } from 'react';

class City extends Component {
  state = {
    city: 'San Francisco',
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
        <a href="#" onClick={this.changeCity}>{this.props.city.cityName}</a>
        <CityPage city={this.state.city} />
      </div>
    );
  }
}

export default City;
