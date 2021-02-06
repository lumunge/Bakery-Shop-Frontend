import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';


export default function Slider(){
    return(
        <div className="slider-wrapper">
            <Carousel showArrows={true} infiniteLoop autoPlay>
                <div>
                    <img src={slide1} alt=""/>
                    <h1>Moist</h1>
                </div>
                <div>
                    <img src={slide2} alt=""/>
                    <h1>Sweet</h1>
                </div>
                <div>
                    <img src={slide3} alt=""/>
                    <h1>Chocolatey</h1>
                </div>
            </Carousel>
        </div>
    );
}