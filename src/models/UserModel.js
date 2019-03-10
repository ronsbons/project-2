import axios from "axios";

const endPoint = `https://arcane-citadel-72655.herokuapp.com/user`;

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