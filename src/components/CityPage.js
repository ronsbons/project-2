import React, { Component } from 'react';
import PostContainer from '../container/PostContainer';

class CityPage extends Component {
  render() {
    return (
      <div>
        <h4>CityPage component</h4>
        <h6>City Name</h6>
        <h6><img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1444253482%2FDG2015-san-francisco.jpg%3Fitok%3DMdRJm2Zo&f=1" alt="Golden Gate Bridge at dusk"></img></h6>
        <PostContainer />
      </div>
    );
  }
}

export default CityPage;
