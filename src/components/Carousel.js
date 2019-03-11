import React from 'react';
import Slider from 'react-slick';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 5000,
        cssEase: "linear"
   
      };
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="frisco">
          </div>
          <div className="plane">
          </div>
          <div className="relaxing">
        
          </div>
          <div className="paris">
          </div>
        
        </Slider>
      </div>
    );
}

export default Carousel;