import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
                <footer>
                    <div className="footerMain">
                    <div className="footerCol">
                        <h2>Explore</h2>
                        <Link to="/">Home</Link>
                        <Link to="/cakes-&-confectionaries">Cakes</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <div className="footerCol">
                        <h2>Social</h2>
                        <a href="#!">Instagram</a>
                        <a href="#!">Facebook</a>
                    </div>
                    <div className="footerCol">
                        <h2>Legal</h2>
                        <a href="#!">Privacy Policy</a>
                        <a href="#!">Terms Of Use</a>
                    </div>
                    <div className="footer linkToTop">
                        <p>Back To Top</p>
                    </div>
                    </div>
                    <div className="copy">
                        <p>All Rights Reserved &copy; 2020 cremecakes.com.</p>
                    </div>
                </footer>
        );
    }
}
