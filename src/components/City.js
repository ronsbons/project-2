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
<<<<<<< HEAD
      <div >
        <h5></h5>
        <p className='f3'>{this.props.city.cityName}</p>
        <button className='ui button orange small' onClick={this.changeCity}>{this.props.city.cityName}</button>
=======
      <div>
        <button onClick={this.changeCity}>{this.props.city.cityName}</button>
>>>>>>> 9f457f247d567e46ac8b3707990d1af08dae3cb3
      </div>
    );
  }
}

export default City;
