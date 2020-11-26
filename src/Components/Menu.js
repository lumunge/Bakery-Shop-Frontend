import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MenuLinks } from './MenuLinks';
import '../App.css';


export default function Menu(){

    const [click, setClick] = useState(false);
    const showX = () => {
        setClick(!click);
    }

    let class1 = 'menuBtn';
    if(click){
        class1 += ' close';
    }

    let class2 = 'menu';
    if(click){
        class2 += ' show';
    }

    let class3 = 'menuBranding';
    if(click){
        class3 += ' show';
    }

    let class4 = 'menuNav';
    if(click){
        class4 += ' show';
    }

    let class5 = 'navItem';
    if(click){
        class5 += ' show';
    }

    return(
            <header>
            <div className={class1} onClick={showX}>
                <div className="btnLine"></div>
                <div className="btnLine"></div>
                <div className="btnLine"></div>
            </div>

            <nav className={class2}>

            <div className={class3}>
                <h1 className="mainLogo">Caro Cakes and Confectionaries</h1>
                <div className="potrait">
                    <div className="icons">
                    <a href="#!">
                    <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#!">
                    <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#!">
                    <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    </div>
                </div>
            </div>

            <ul className={class4} >
            {MenuLinks.map((item, index) => {
                return(
                    <li key={index} className={class5}>
                        <Link to={item.path} className={item.cName}>
                            {item.title}
                        </Link>
                    </li>
                );
            })}
            </ul>

            </nav>

            </header>
       
    );
}