import React, { Component } from "react";
import CityModel from "../models/CityModel.js";
import CityPostContainer from "../container/CityPostContainer";
import CreatePostForm from "./CreatePostForm";
import CityPostsModel from "../models/CityPostsModel.js";
import Axios from "axios";

class CityPage extends Component {
  state = {
    currentCityId: this.props.currentCityId,
    currentCity: {
      cityName: "",
      cityPhoto: ""
    },
    posts: [],
    post: null
  };

  componentDidMount() {
    console.log(`CityPage mounted`);
    CityModel.getCurrentCity(this.state.currentCityId)
      .then(response => {
        this.setState({
          currentCity: response.data[0]
        });
        console.log(this.state.currentCity);
      })
      .catch(error => {
        console.log(`retrieving current city error: ${error}`);
      });
    // this.fetchData();
  }

  fetchData() {
    console.log(`CityPage fetching data`);
    CityPostsModel.getCityPosts(this.state.currentCity._id).then(res => {
      console.log(res);
      this.setState({
        posts: res.data
      });
      console.log(this.state.posts);
    });
  }

  createPost = post => {
    let newPost = post;
    console.log(newPost);
    Axios.post("http://arcane-citadel-72655.herokuapp.com/api/posts", newPost)
      .then(response => {
        let posts = this.state.posts;
        posts.push(response.data);
        this.setState({
          posts: posts
        });
      })
      .catch(error => {
        console.log("create new form error: ", error);
      });
  };

  reload = event => {
    event.preventDefault();
    this.setState({
      currentCityId: sessionStorage.getItem("currentCity")
    });
    console.log(this.state.currentCity);

    CityModel.getCurrentCity(this.state.currentCityId)
      .then(response => {
        this.setState({
          currentCity: response.data[0]
        });
        this.fetchData(); // load posts
        console.log(this.state.currentCity);
      })
      .catch(error => {
        console.log(`retrieving current city error: ${error}`);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.reload}>Reload</button>
        <h4>CityPage component</h4>
        <h6>ID - {this.state.currentCityId}</h6>
        <h6>cityName - {this.state.currentCity.cityName}</h6>
        <p>
          cityPhoto -{" "}
          <img
            width="500px"
            src={this.state.currentCity.cityPhoto}
            alt={this.state.currentCity.cityName}
          />
        </p>
        <p>
          hard coded image - <br />
          <img
            width="500px"
            src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1444253482%2FDG2015-san-francisco.jpg%3Fitok%3DMdRJm2Zo&f=1"
            alt="Golden Gate Bridge at dusk"
          />
        </p>
        <CityPostContainer
          city={this.props.currentCity}
          user={this.props.user}
          posts={this.state.posts}
          post={this.state.post}
        />
        <CreatePostForm
          city={this.props.currentCityId}
          user={this.props.user}
          createPost={this.createPost}
        />
      </div>
    );
  }
}

export default CityPage;
