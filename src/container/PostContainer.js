import React, { Component } from "react";
import PostsModel from "../models/PostsModel";
// import PostList from "../components/PostList";

class PostContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    PostsModel.allPosts().then(res => {
      console.log(res);
      this.setState({
        posts: res.data.posts,
        post: ""
      });
    });
  }
  render() {
    return (
      <div className="postsComponent">
        {/* <PostList posts={this.state.posts} /> */}
      </div>
    );
  }
}

export default PostContainer;
