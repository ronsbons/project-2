import React, {Component} from 'react';
import About from "../components/About";
import Carousel from '../components/Carousel';

class HomeContainer extends Component {
    render(){
        return(
            <div>
               
                <Carousel/>    
                <About />
            </div>
        )
    }
}

export default HomeContainer;