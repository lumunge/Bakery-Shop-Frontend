import React from 'react';
import '../App.css';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import Slider from '../Components/Slider';


export default function Home(){
    return(
        <div>
        <Menu/>
        {/* <div className="overlay"></div> */}
        <Slider/>
        <div className="home">
            <h1 className="heading">Creme <span>Cakes and Confectionaries</span></h1>
            <h2>A good Motto Here</h2>
            <a href="#!" className="button">Learn More</a>
        </div>
        <Footer/>
        </div>
    );
}