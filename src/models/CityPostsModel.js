import axios from "axios";

const endPoint = "http://localhost:3001/api/cities";

class CityPostsModel {
  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  }
}

export default CityPostsModel;
