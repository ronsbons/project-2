import React, { Component } from "react";

class City extends Component {
  changeCity = event => {
    event.preventDefault();
    sessionStorage.clear();
    sessionStorage.setItem("currentCity", this.props.city._id);
    console.log("City", this.props.city);
    this.props.loadCity(); // Update CityContainer
  };

  render() {
    return (
      <div >
        <h5></h5>
        <p className='f3'>{this.props.city.cityName}</p>
        <button className='ui button orange small' onClick={this.changeCity}>{this.props.city.cityName}</button>
      </div>
    );
  }
}

export default City;
