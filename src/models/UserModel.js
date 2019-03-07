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
  
  static update = (user) => {
    let query = qs.stringify(user);
    console.log('query', query);
    let request = axios.put(`${endPoint}/${users._id}`, query);
    return request;
  }

}

export default UserModel;