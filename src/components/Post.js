import React, { Component } from "react";
import PostDetail from "./PostDetail";

class Post extends Component {
<<<<<<< HEAD
  showPost = event => {
    event.preventDefault();
  };

  render() {
    return (
      <li data-posts-index={this.props.post.id}>
        <a href="#">{this.props.post.postTitle}</a>
        <PostDetail post={this.props.post} />
=======

  deleteUserPost = (event) => {
    event.preventDefault();
    this.props.deletePost(this.props.post)
  }
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
          <div>
              <span>{this.props.post.postTitle}</span>
              <a
              href="#removePost"
              className="remove"
              onClick={this.deleteUserPost}
              >
              Remove
              </a>

          </div>
          <PostDetail post={this.props.post}/>
>>>>>>> Jon
      </li>
    );
  }
}

export default Post;
