import axios from "axios";

const endPoint = `http://localhost:3001/api/userposts`;

class PostsModel {
  static getUserPosts(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    return request;
  }
}

export default PostsModel;
