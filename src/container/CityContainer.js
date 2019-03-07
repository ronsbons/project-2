import React, {Component} from 'react';
import CityList from '../components/CityList.js';
import CityPage from '../components/CityPage.js';
import Axios from 'axios';

class CityContainer extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    Axios.get('http://localhost:3001/api/cities').then( (response) => {
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