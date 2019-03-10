import React, { Component } from 'react';
import { TableBody } from 'semantic-ui-react';

class UpdatePostForm extends Component {
  state={
    post: {},
  }

  componentDidMount() {
    console.log('POST');
    console.log(this.props.user);
    this.setState({
        post: this.props.post
    });
  }

  onInputChange = (event) => {
    let post = this.state.post;
    post[event.target.name] = event.target.value;

    this.setState({
      post: post
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.updatePost(this.state.post._id, this.state.post)
    this.setState({
      post:{
          postTitle:'',
          postContent:''
      }
    })
  }

  render() {
    return (
        <div>
            <form 
            onSubmit={this.onFormSubmit}
            className="mt3"
            >
            <div className="flex flex-column">
            <h3>Post Title</h3>
            <input 
                type="text"
                name="postTitle"
                value={(this.state.post.postTitle) || ""}
                onChange={this.onInputChange}
                />
              <h3>Message</h3>
                <textarea 
                type="textbody"
                name="postContent"
                value={(this.props.post.postContent)}
                onChange={this.onInputChange}
                />

            </div>
                
            </form>
      </div>


    );
  }
}

export default UpdatePostForm;