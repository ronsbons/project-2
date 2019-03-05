import React, {Component} from 'react';
import CityContainer from './CityContainer'
import UserContainer from './UserContainer';

class MainContainer extends Component {
    render(){
        return(
            <div>
                <CityContainer />
                <UserContainer />
            </div>
        );
    }
}

export default MainContainer;