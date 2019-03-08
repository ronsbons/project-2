import axios from "axios";

const endPoint = `http://localhost:3001/api/userposts`;


class PostsModel {
  static allUserPosts(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    console.log("axios request", request);
    return request;
  }

  static deleteUserPosts(post) {
    let request = axios.delete(`${endPoint}/${post._Id}`)
    return request;
  }

}



export default PostsModel;
