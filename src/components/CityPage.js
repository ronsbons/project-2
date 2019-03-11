import React, { Component } from 'react';
import CityModel from '../models/CityModel.js';
import CityPostContainer from '../container/CityPostContainer';
import CreatePostForm from './CreatePostForm';
import CityPostsModel from '../models/CityPostsModel.js';

class CityPage extends Component {
  // Notes: Props = currentCityID, user
  state = {
    currentCity: {
      cityName: '',
      cityPhoto: ''
    },
    posts: [],
    post: null
  };

  // upon first page load/mount, load default city
  componentDidMount() {
    console.log(`CityPage mounted`);
    CityModel.getCurrentCity(this.props.currentCityId)
      .then(response => {
        this.setState({
          currentCity: response.data[0]
        });
        console.log(this.state.currentCity);
        console.log('trying to get posts upon initial page load');
        this.fetchData();
      })
      .catch(error => {
        console.log(`componentDidMount retrieving current city error: ${error}`);
      });
  };

  componentDidUpdate(prevProps) {
    console.log('component did update');
    // Loads city information if city id is changed.
    if (this.props.currentCityId !== prevProps.currentCityId) {
      console.log("city id", this.props);
      this.loadCity();
    }
  };

  loadCity() {
    console.log('in loadCity');
    CityModel.getCurrentCity(this.props.currentCityId)
      .then(response => {
        this.setState({
          currentCity: response.data[0]
        });
        console.log(this.state.currentCity);
        this.fetchData(); // load posts
      })
      .catch(error => {
        console.log(`componentDidUpdate loadCity retrieving current city error: ${error}`);
      });
  };

  // get city posts
  fetchData() {
    console.log(`CityPage fetching posts data`);
    CityPostsModel.getCityPosts(this.state.currentCity._id).then(res => {
      console.log(res);
      this.setState({
        posts: res.data
      });
      console.log(this.state.posts);
    }).catch( (error) => {
      console.log(`fetch posts data error: ${error}`);
    });
  };

  createPost = post => {
    let newPost = post;
    console.log(newPost);
    CityPostsModel.createPost(newPost).then( (response) => {
        let posts = this.state.posts;
        posts.push(response.data);
        this.setState({
          posts: posts
        });
      }).catch(error => {
        console.log("create new form error: ", error);
      });
  };

  render() {
    console.log('CityPage mounting');
    return (
      <div className='tc mw10 center bg-white br3 pa3 pa3-ns mv5 ba b--black-10>

        <h3>{this.state.currentCity.cityName}</h3>
        <p>
          <img className='pa1 ba b13--black-10 h15 w15'
            width="500px"
            src={this.state.currentCity.cityPhoto}
            alt={this.state.currentCity.cityName}
          />

        <CreatePostForm
          city={this.props.currentCityId}
          user={this.props.user}
          createPost={this.createPost}
        />
        </p>
        <CityPostContainer
          // city={this.props.currentCity}
          user={this.props.user}
          posts={this.state.posts}
          post={this.state.post}
        />
        
      </div>
    );
  };
};

export default CityPage;
