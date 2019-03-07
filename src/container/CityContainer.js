import React, {Component} from 'react';
import CityModel from '../models/CityModel.js';
import CityList from '../components/CityList.js';

class CityContainer extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    CityModel.allCities().then( (response) => {
      this.setState({
        cities: response.data.cities,
      });
    }).catch( (error) => {
      console.log('retrieiving all cities error: ', error);
    });
  };

  render(){
    return(
      <div>
        CityContainer
        <CityList cities={this.state.cities} user={this.props.user} />
      </div>
    )
  }
}

export default CityContainer;