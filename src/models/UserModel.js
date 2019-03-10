import axios from "axios";

const endPoint = 'http://arcane-citadel-72655.herokuapp.com/api/cities';

class UserModel {
  static allUsers() {
    console.log('getting users')
    let request = axios.get(endPoint);
    console.log(request)
    return request;
  }

  static update(userId, updateInfo) {
    let request = axios.put(`${endPoint}/${userId}`, updateInfo)
    return request
  }

}

export default UserModel;
