import React, { Component } from 'react';

class PostList extends Component {
    render() {
        return (
                <li data-posts-index={this.props.posts.id}>
                <span>{this.props.posts.body}</span>
                </li>
        );
    }
}

export default PostList;