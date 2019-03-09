import React, { Component } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import UpdatePostForm from './UpdatePostForm';

 

class PostDetail extends Component {
  state = {
  
  }

  handleOpen= () => {
    document.getElementById('userProfileModal').style.display='block';
}
  handleClose= () => {
    document.getElementById('lou').style.display='none';
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
      </div>

        <div>
              <a
<<<<<<< HEAD
              href="#editPost"              >
=======
              href="#editPost"
              onClick={this.handleOpen}
              display="none"
              >
>>>>>>> Jon
                Edit
              </a>
              <div
              id="lou"
              >
                <UpdatePostForm
                post={this.props.post}
                updatePost={this.props.updatePost}
                />
                <h3
                onClick={this.handleClose}
                >X</h3>
              </div>
        </div>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
    );
  }
}

export default PostDetail;
