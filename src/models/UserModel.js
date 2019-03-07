import axios from "axios";

const endPoint = `http://localhost:3001/api/users`;

class UserModel {
  static allUsers() {
    console.log('getting users')
    let request = axios.get(endPoint);
    console.log(request)
    return request;
  };

  static update(userId, updateInfo) {
    let request = axios.put(`${endPoint}/${userId}`, updateInfo);
    return request;
  };

}

export default UserModel;