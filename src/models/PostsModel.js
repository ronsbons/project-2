import axios from "axios";

const endPoint = `http://localhost:3001/api/userposts`;


class PostsModel {
  static allUserPosts(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    console.log("axios request", request);
    return request;
  }

  static deleteUserPosts(post) {
    console.log(post)
    let request = axios.delete(`${endPoint}/${post._id}`)
    return request;
  }

}



export default PostsModel;
