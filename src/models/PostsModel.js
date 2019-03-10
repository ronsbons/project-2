import axios from "axios";

// const endPoint = `https://arcane-citadel-72655.herokuapp.com/userposts`;
const endPoint = `http://localhost:3001/userposts`;

class PostsModel {
  static getUserPosts(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    return request;
  };

  static deleteUserPosts(post) {
    console.log(post)
    let request = axios.delete(`${endPoint}/${post._id}`)
    return request;
  };

  static update (postId,updateInfo){
    let request = axios.put(`${endPoint}/${postId}`,updateInfo)
    return request;
  }
};

export default PostsModel;
