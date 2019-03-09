import React, {Component} from 'react';
import CityModel from '../models/CityModel.js';
import CityList from '../components/CityList.js';
import CityPage from '../components/CityPage.js';

class CityContainer extends Component {
  state = {
    cities: [],
    currentCityId: sessionStorage.getItem('currentCity'),
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

  render(){
    return(
      <div className="city-container">
        CityContainer
        <CityList cities={this.state.cities} user={this.props.user} />
        {/* <CityPage currentCityId={this.state.currentCityId} /> */}
      </div>
    )
  }
}

export default CityContainer;