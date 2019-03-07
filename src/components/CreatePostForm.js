import React, { Component } from 'react';

class CreatePostForm extends Component {
  state = {
    city: '',
    user: this.props.user._id,
    postTitle: '',
    postContent: '',
    
  };

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let post = {
      city: {
        cityName: this.state.city,
      },
      user: this.state.user,
      postTitle: this.state.postTitle,
      postContent: this.state.postContent,
    };

    this.props.createPost(post);
    this.setState({
      city: '',
      user: this.props.user._id,
      postTitle: '',
      postContent: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create a New Post</h3>
          <select name="city" onChange={this.handleInput}>
            <option value="San Francisco">San Francisco</option>
            <option value="London">London</option>
            <option value="Gibraltar">Gibraltar</option>
          </select>
          <label for="title">Title</label>
          <input type="text" id="title" name="postTitle" maxLength="200" placeholder="Title" onChange={this.handleInput} />
          <textarea name="postContent" required placeholder="Type your post here"></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
