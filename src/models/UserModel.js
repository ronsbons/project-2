import axios from "axios";

// const endPoint = `https://stark-chamber-26373.herokuapp.com/user`;
const endPoint = `http://localhost:3001/user`;

class UserModel {
  static allUsers() {
    console.log('getting users')
    let request = axios.get(endPoint);
    console.log(request)
    return request;
  };

  static update(userId, updateInfo) {
    let request = axios.put(`${endPoint}/${userId}`, updateInfo)
    return request
  };
};

export default UserModel;
