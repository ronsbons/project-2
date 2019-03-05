import axios from "axios";

const endPoint = `http://localhost:3001/api/users`;

class UserModel {
  static allUsers() {
    let request = axios.get(endPoint);
    return request;
  }
}

export default UserModel;