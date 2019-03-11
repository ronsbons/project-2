import React, { Component } from 'react';
import PostsModel from '../models/PostsModel';
import PostList from '../components/PostList';

class PostContainer extends Component {
  state = {
    posts: [],
    post: null,
    userId: this.props.user._id
  };


  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    PostsModel.getUserPosts(this.state.userId).then(res => {
      console.log(res);
      this.setState({
        posts: res.data,
        post: res.data[0]
      });
      console.log(this.state.posts);
      console.log(this.state.post);
    }).catch( (error) => {
      console.log('retrieving user posts error: ', error);
    });
  };

  deletePost = (post) => {
    PostsModel.deleteUserPosts(post).then((res) => {
      let posts = this.state.posts.filter(function(post) {
        
        return post._id !== res.data._id
      });
      this.setState({ posts });
    })
  }

updatePost = (postId,postBody) => {
    PostsModel.update(postId,postBody).then((res)=>{
      let post = res.data;
      console.log(res.data)
      this.setState({
        post:post
      })
    })
  }

  render() {
    if (this.state.post === null) {
      return (
        <div className="" />
      )
    } else {
      return (
        <div className="mw6 center bg-white br3 pa3 pa4-ns mv5 ba b--black-10">
          <h2 className='f2 mb2'>Your Posts</h2>
          <PostList 
            posts={this.state.posts} 
            deletePost={this.deletePost}
            updatePost={this.updatePost}
            user={this.props.user}
          />
        </div>
      );
    }
  }
}

export default PostContainer;