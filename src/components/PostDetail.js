import React, { Component } from "react";
import Modal from '@material-ui/core/Modal';
 

class PostDetail extends Component {
  state= {
    open:false
}

handleOpen = () => {
    this.setState ({
        open:true
    })
}

handleClose = () => {
    this.setState({
        open:false
    })
}

  render() {
    return (
      <div>
        <button
        onClick={this.handleOpen}
        >
          Edit 
        </button>
        {/* <Modal */}
      
          <h1>{this.props.post.postTitle}</h1>
          <h2>{this.props.post.user}</h2>
          <p>{this.props.post.postContent}</p> 
          
           Hi
       {/* </Modal>  */}
      </div>
    );
  }
}

export default PostDetail;
