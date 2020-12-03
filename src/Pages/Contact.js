import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import MapContainer from '../Components/MapContainer';



export default class Contact extends Component {
    render() {
        return (
            <div>
                <Menu />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="mainContact">
            <div className="landing">
                <div className="landingContent">
                <h3>Hey There, Get in touch with us ASAP!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type 
                    specimen book. .</p>
                    </div>
            </div>
            <div className="contactContainer">
                <div className="form">
                    
                    <form>
                    <h1>Send Us A Message</h1>
                        <div>
                        <input type="text" placeholder="Your Name..." />
                        </div>
                        <div>
                        <input type="number" placeholder="Phone Number..." />
                        </div>
                        <div>
                        <input type="email" placeholder="Email Address..." />
                        </div>
                        <div>
                            <textarea rows="5" cols="28" placeholder="You message here.."></textarea>
                        </div>
                        <a href="#!"><i class="fas fa-paper-plane"></i></a>
                    </form>
                </div>
                <div className="contactInfo">
                    <div className="details">
                        <h1>More Information</h1>
                    <p><i class="fas fa-search-location"></i> Roasters near Garden City Mall</p>
                    <p><i class="fas fa-phone"></i> +25477777777</p>
                    <p><i class="fas fa-envelope-open-text"></i> cakes@yahoo.com </p>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/CremeofCakes/"><i class="fab fa-facebook-square"></i></a>
                        <a href="#!"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            
            <Footer/>

            <div className="mapContainer">
                <div className="map">
                    <MapContainer/>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
