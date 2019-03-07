import React, { Component } from "react";

class Post extends Component {
  showPost = (event) => {
    event.preventDefault();
  };
  
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
        <button onClick={this.showPost}>{this.props.post.postTitle}</button>
      </li>
    );
  }
}

export default Post;
