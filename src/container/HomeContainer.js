import React, {Component} from 'react';
import About from "../components/About";
import Carousel from '../components/Carousel';

class HomeContainer extends Component {
    render(){
        return(
            <div className='homeCont'>
                <Carousel/>    
                <About />
            </div>
        )
    }
}

export default HomeContainer;