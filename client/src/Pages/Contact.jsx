import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import MapContainer from '../Components/MapContainer';
import axios from 'axios';
// import FlashMessage from 'react-flash-message';



export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            message: "",
            showMessage: false
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendContact = (e) => {
        this.setState({ showMessage: false });
        e.preventDefault();
        axios.post('/api/contact-info', this.state)
            .then(res => {
                console.log(res);
            })
            .then(() => {
                this.setState({ showMessage: true })
            })
            .catch(err => {
                console.log(err);
            })
    }

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
                    
                    <form onSubmit={this.sendContact}>
                    <h1>Send Us A Message</h1>
                    {
                    this.state.showMessage &&
                        <div>
                            {/* <FlashMessage duration={5000}>
                                <p className="flashMessage">Success!, Thanks for your feedback.</p>
                            </FlashMessage> */}
                        </div>
                }
                        <div>
                        <input type="text" required placeholder="Your Name..." name="name" onChange={this.handleInput} />
                        </div>
                        <div>
                        <input type="number" required placeholder="Phone Number..." name="phone" onChange={this.handleInput} />
                        </div>
                        <div>
                        <input type="email" required placeholder="Email Address..." name="email" onChange={this.handleInput} />
                        </div>
                        <div>
                            <textarea rows="5" cols="28" required placeholder="You message here.." name="message" onChange={this.handleInput}></textarea>
                        </div>
                        <div>
                        <button type="submit" className="submitContact"><i class="fas fa-paper-plane"></i></button>
                        </div>
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
                        <a href="#!"><i class="fab fa-facebook-square"></i></a>
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
