import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import '../App.css';


export default function Slider(){
    return(
        <div className="slider-wrapper">
            <Carousel
             showArrows={true} 
             infiniteLoop 
             autoPlay
             showThumbs={false}
             showStatus={false}
             >
                <div className="slider">
                    <img src={slide1} alt=""/>
                    <p>Moist</p>
                </div>
                <div className="slider">
                    <img src={slide2} alt=""/>
                    <p>Sweet</p>
                </div>
                <div className="slider">
                    <img src={slide3} alt=""/>
                    <p>Chocolatey</p>
                </div>
            </Carousel>
        </div>
    );
}