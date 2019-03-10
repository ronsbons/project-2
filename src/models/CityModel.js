import axios from 'axios';

// const endPoint = 'https://arcane-citadel-72655.herokuapp.com/api/cities';
const endPoint = 'http://localhost:3001/cities';


class CityModel {
  static allCities() {
    let request = axios.get(endPoint);
    console.log('axios get request: ', request);
    return request;
  };

  static getCurrentCity(currentCityId) {
    let request = axios.get(`${endPoint}/${currentCityId}`);
    console.log(`axios get current city request: ${request}`);
    return request;
  }

};

export default CityModel;