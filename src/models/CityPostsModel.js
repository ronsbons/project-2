import axios from "axios";

const endPoint = `http://localhost:3001/api/posts`;

class CityPostsModel {
  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  };
};

export default CityPostsModel;
