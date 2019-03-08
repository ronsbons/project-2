import React, { Component } from "react";
<<<<<<< HEAD

class PostDetail extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.postTitle}</h1>
        <h2>{this.props.post.user.userEmail}</h2>
        <p>{this.props.post.postContent}</p>
=======
import { Button, Header, Image, Modal } from 'semantic-ui-react';

 

class PostDetail extends Component {
  state = {

      formStyle : {display: 'block'},
      bodyStyle : {},
  
  }

  toggleBodyForm = () => {
    (this.state.formStyle.display === 'block')?
      this.setState({formStyle: {display: 'none'}, bodyStyle: {display:'block'} })
    :
      this.setState({formStyle: {display:'block'}, bodyStyle: {display: 'none'}})
  }

  render() {
    return (
    <Modal 
    trigger={<a>View</a>}>
    <Modal.Header>City Post</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://www.aaronstoychest.co.uk/wp-content/uploads/2017/09/59754444.jpg' />
      <Modal.Description>
      <div
      style={this.formStyle}
      >
          <Header>{this.props.post.postTitle}</Header>
          <p>{this.props.post.postContent}</p>
          <span>{this.props.post.user}</span>
>>>>>>> Jon
      </div>

        <div>
              <a
              href="#editPost"
              onClick={this.toggleBodyForm}
              >
                Edit
              </a>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    );
  }
}

export default PostDetail;
