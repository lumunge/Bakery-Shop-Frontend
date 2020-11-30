import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <footer>
                    <div className="footer">
                        <h2>Explore</h2>
                        <a href="#!">Home</a>
                        <a href="#!">Cakes</a>
                        <a href="#!">Contact</a>
                        <a href="#!">About</a>
                    </div>
                    <div className="footer">
                        <h2>Social</h2>
                        <a href="#!">Instagram</a>
                        <a href="#!">Facebook</a>
                    </div>
                    <div className="footer">
                        <h2>Legal</h2>
                        <a href="#!">Privacy Policy</a>
                        <a href="#!">Terms Of Use</a>
                    </div>
                    <div className="footer linkToTop">
                        <p>Back To Top</p>
                    </div>
                </footer>
        );
    }
}
