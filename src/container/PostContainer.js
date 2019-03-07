import React, { Component } from "react";
import PostsModel from "../models/PostsModel";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";

class PostContainer extends Component {
  state = {
    posts: [],
    post: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    PostsModel.allPosts().then(res => {
      console.log(res);
      this.setState({
        posts: res.data,
        post: res.data[0]
      });
    });
  }

  render() {
    if (this.state.post === null) {
      return (
        <div className="postsConstainer" />
      )
    } else {
      return (
        <div className="postsConstainer">
          <h2>This is a post container</h2>
          <PostList posts={this.state.posts} />
          <PostDetail post={this.state.post} />
        </div>
      );
    }
  }
}

export default PostContainer;
