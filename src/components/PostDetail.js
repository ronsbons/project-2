import React, { Component } from "react";
import Modal from '@material-ui/core/Modal';
 

class PostDetail extends Component {
  
  render() {
    return (
      <div>
        <button>
          Edit 
        </button>
        <Modal>
          {/* <h1>{this.props.post.postTitle}</h1>
          <h2>{this.props.post.user.userEmail}</h2>
          <p>{this.props.post.postContent}</p> */}
        </Modal>
      </div>
    );
  }
}

export default PostDetail;
