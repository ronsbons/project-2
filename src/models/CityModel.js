import axios from 'axios';

const endPoint = 'http://localhost:3000/api/cities';

class CityModel {
  static allCities() {
    let request = axios.get(endPoint);
    console.log('axios get request: ', request);
    return request;
  };

};

export default CityModel;