import React, { Component } from 'react';
import PostContainer from '../container/PostContainer';
import CreatePostForm from './CreatePostForm';
import Axios from 'axios';

class CityPage extends Component {
  state = {
    posts: [],
    post: '',
  };

  componentDidMount() {
    this.fetchData();
  };

  // [] HAVE TO FILTER DB RESULTS TO ONLY BE FOR THIS CITY
  fetchData() {
    Axios.get('http://localhost:3000/api/posts', {"city.cityName": this.state.city}).then( (response) => {
      console.log(response.data);
      this.setState({
        posts: response.data.posts,
      });
    });
  };
  // [] CAN YOU PASS IN A SEARCH ARGUMENT HERE IN THE AXIOS CALL?
  // [] BACKEND SERVER ROUTE WOULD HAVE TO BE?
  /* app.get('/api/posts', (request, response) => {
    db.Posts.find( {"city.cityName": req.params.city}, (error, posts) => {
      response.json(posts);
    });
  }) */

  createPost = (post) => {
    let newPost = post;

    Axios.post('http://localhost:3000/api/posts', {newPost}).then( (response) => {
      let posts = this.state.posts;
      let newPosts = posts.push(response.data);
      this.setState({
        posts: newPosts,
      });
    }).catch( (error) => {
      console.log('create new form error: ', error);
    });
  };
  
  render() {
    return (
      <div>
        <h4>CityPage component</h4>
        <h6>cityName - {this.props.city.cityName}</h6>
        <p>cityPhoto - <img src={this.props.city.cityPhoto} alt={this.props.city.cityName}></img></p>
        <p>hard coded image - <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1444253482%2FDG2015-san-francisco.jpg%3Fitok%3DMdRJm2Zo&f=1" alt="Golden Gate Bridge at dusk"></img></p>
        <CreatePostForm createPost={this.createPost} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default CityPage;
