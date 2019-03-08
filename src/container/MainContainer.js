import React, {Component} from 'react';
import CityContainer from './CityContainer'
import UserContainer from './UserContainer';


class MainContainer extends Component {
  state= {
    user: this.props.user
  }
  render(){
    return(
      <div className="mainContainer">
        <UserContainer 
        user={this.state.user} 
        updateUserFullName={this.updateUserFullName} />
      </div>
    );
  }
}

export default MainContainer;