import axios from "axios";

const endPoint = `https://arcane-citadel-72655.herokuapp.com/posts`;

class CityPostsModel {
  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  }
}

export default CityPostsModel;
