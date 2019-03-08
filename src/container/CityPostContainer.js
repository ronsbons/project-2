import React, { Component } from 'react';
import PostList from '../components/PostList.js';

class CityPostContainer extends Component {
  render() {
    if (this.props.post === null) {
      return (
        <div className="city-post-container"></div>
      );
    } else {
      return (
        <div className="city-post-container">
          <h6>CityPostContainer</h6>
          <PostList posts={this.props.posts} post={this.props.post} />
        </div>
      )
    };
  }
}

export default CityPostContainer;
