import React, {Component} from 'react';
import CityContainer from './CityContainer'
import UserContainer from './UserContainer';


class MainContainer extends Component {
  render(){
    return(
      <div>
        <CityContainer />
        <UserContainer user={this.state.user} updateUserFullName={this.updateUserFullName} />
      </div>
    );
  }
}

export default MainContainer;