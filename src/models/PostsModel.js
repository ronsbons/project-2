import axios from "axios";

const endPoint = `http://localhost:3001/api/posts`;

class PostsModel {
  static allPosts() {
    let request = axios.get(endPoint);
    return request;
  }
}

export default PostsModel;
