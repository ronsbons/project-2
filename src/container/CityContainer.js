import React, { Component } from 'react';
import CityModel from '../models/CityModel.js';
import CityList from '../components/CityList.js';
import CityPage from '../components/CityPage.js';

class CityContainer extends Component {
  constructor() {
    super();
    this.loadCity = this.loadCity.bind(this);
  };

  state = {
    cities: [],
    currentCityId: '5c8597b55ed36e00172d909d',
  };

  componentDidMount() {
    CityModel.allCities()
      .then(response => {
        this.setState({
          cities: response.data
        });
        console.log(this.state.cities);
      })
      .catch(error => {
        console.log('retrieiving all cities error: ', error);
      });
  };

  loadCity() {
    this.setState({
      currentCityId: sessionStorage.getItem('currentCity')
    });
  };

  render() {
    return (
      <div className="city-container cityComp">
        <div className="cityContainer">
          <div className="fl w-40 tc">
            <CityList
              cities={this.state.cities}
              user={this.props.user}
              loadCity={this.loadCity}
            />
          </div>
          <div className="fl w-50 tc">
            <CityPage
              currentCityId={this.state.currentCityId}
              user={this.props.user}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CityContainer;
