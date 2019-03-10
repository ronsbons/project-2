import axios from "axios";

const endPoint = "http://arcane-citadel-72655.herokuapp.com/api/cities";

class CityPostsModel {
  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  }
}

export default CityPostsModel;
