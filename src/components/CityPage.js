import React, { Component } from "react";
import CityPostContainer from "../container/CityPostContainer";
import CreatePostForm from "./CreatePostForm";
import CityPostsModel from '../models/CityPostsModel.js';
import Axios from "axios";

class CityPage extends Component {
  state = {
    posts: [],
    post: null,
  };

  componentDidMount() {
    console.log(`CityPage mounted`);
    this.fetchData();
  }

  fetchData() {
    console.log(`CityPage fetching data`);
    CityPostsModel.getCityPosts(this.props.city._id).then(res => {
      console.log(res);
      this.setState({
        posts: res.data,
        post: res.data[0]
      });
      console.log(this.state.posts);
      console.log(this.state.post);
    });
  }

  createPost = post => {
    let newPost = post;
    console.log(newPost);
    Axios.post("http://localhost:3001/api/posts", newPost)
      .then(response => {
        let posts = this.state.posts;
        let newPosts = posts.push(response.data);
        this.setState({
          posts: newPosts
        });
      })
      .catch(error => {
        console.log("create new form error: ", error);
      });
  };

  render() {
    return (
      <div>
        <h4>CityPage component</h4>
        <h6>cityName - {this.props.city.cityName}</h6>
        <p>
          cityPhoto -{" "}
          <img
            width="500px"
            src={this.props.city.cityPhoto}
            alt={this.props.city.cityName}
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
        <CityPostContainer city={this.props.city} user={this.props.user} posts={this.state.posts} post={this.state.post} />
        <CreatePostForm city={this.props.city} user={this.props.user} createPost={this.createPost} />
      </div>
    );
  }
}

export default CityPage;
