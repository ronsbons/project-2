import React, {Component} from 'react';
import CityModel from '../models/CityModel.js';
import CityList from '../components/CityList.js';
import CityPage from '../components/CityPage.js';

class CityContainer extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    CityModel.allCities().then( (response) => {
      this.setState({
        cities: response.data,
      });
      console.log(this.state.cities);
    }).catch( (error) => {
      console.log('retrieiving all cities error: ', error);
    });
  };

  // changeCity

  render(){
    let cities = this.state.cities.map( (city) => {
      return (
        <CityPage
          key={city._id}
          city={city}
          user={this.props.user} />
      );
    });

    return(
      <div className="city-container">
        CityContainer
        <CityList cities={this.state.cities} user={this.props.user} />
        {cities}
      </div>
    )
  }
}

export default CityContainer;