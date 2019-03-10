import axios from "axios";

const endPoint = 'http://arcane-citadel-72655.herokuapp.com/api/cities';

class PostsModel {
  static getUserPosts(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    return request;
  };

  static getCityPosts(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
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
