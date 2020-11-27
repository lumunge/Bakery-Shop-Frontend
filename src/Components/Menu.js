import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MenuLinks } from './MenuLinks';
import '../App.css';


export default class Menu extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    showMenu = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <header className="navbar">
            
                <div className={this.state.clicked ? "menuBtn close" : "menuBtn"} onClick={this.showMenu}>
                    <div className="btnLine"></div>
                    <div className="btnLine"></div>
                    <div className="btnLine"></div>
                </div>

                <div className="branding">
                    <a href="#!">Cakes and Confectionaries</a>
                </div>
                
                <nav className={this.state.clicked ? "menu show" : "menu"}>
                    <ul className={this.state.clicked ? "menuNav show" : "menuNav"}>
                    {MenuLinks.map((item, index) => {
                        return(                         
                            <li key={index} className={this.state.clicked ? "navItem show" : "navItem"}>
                                <Link to={item.path} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    </ul>
                </nav>

            </header>
        )
    }
}