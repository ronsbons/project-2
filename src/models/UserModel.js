import axios from "axios";
var qs = require('querystring');

const endPoint = `http://localhost:3001/api/users`;

class UserModel {
  static allUsers() {
    console.log('getting users')
    let request = axios.get(endPoint);
    console.log(request)
    return request;
  }
  

}

export default UserModel;