import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div>
        <h5>City component</h5>
        <a href="#">{this.props.city.cityName}</a>
      </div>
    );
  }
}

export default City;
