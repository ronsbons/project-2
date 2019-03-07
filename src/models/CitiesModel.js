import axios from "axios";

const endPoint = `http://localhost:3001/api/cties`;

class CitiesModel {
  static allCities() {
    let request = axios.get(endPoint);
    return request;
  }
}

export default CitiesModel;
