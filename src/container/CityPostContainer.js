import React, { Component } from 'react';

class CityPostContainer extends Component {
  state = {
    userId: this.props.user._id,
    cityId: this.props.city._id,
    posts: [],
    post: null,
  }

  componentDidMount() {
    // this.fetchData();
  }

  // axios call to get posts for one city using city id, which is currently in this.props.city._id


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default CityPostContainer;
