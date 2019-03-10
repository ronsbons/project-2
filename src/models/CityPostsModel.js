import axios from "axios";

// const endPoint = `https://arcane-citadel-72655.herokuapp.com/api/posts`;
const endPoint = `http://localhost:3001/posts`;

class CityPostsModel {
  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  };
};

export default CityPostsModel;
