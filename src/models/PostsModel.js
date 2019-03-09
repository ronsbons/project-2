import axios from "axios";

const endPoint = `http://arcane-citadel-72655.herokuapp.com/api/userposts`;

class PostsModel {
  static getUserPosts(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    return request;
  };

  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  };
};

export default PostsModel;
