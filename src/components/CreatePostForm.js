import React, { Component } from 'react';

class CreatePostForm extends Component {
  state = {
    postTitle: '',
    postContent: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleInput = (event) => {
    event.preventDefault;
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="postTitle" maxLength="200" placeholder="Title" onChange={this.handleInput} />
          <textarea name="postContent" required placeholder="Type your post here"></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
