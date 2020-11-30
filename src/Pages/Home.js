import React from 'react';
import '../App.css';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

export default function Home(){
    return(
        <div>
        <Menu />
        {/* <div className="overlay"></div> */}
        <div className="home">
            <h1 className="heading">Caro's <span>Cakes and Confectionaries</span></h1>
            <h2>A good Motto Here</h2>
            <a href="#!" className="button">Learn More</a>
        </div>
        <Footer/>
        </div>
    );
}