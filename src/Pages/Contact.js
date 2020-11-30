import React from 'react';
import Menu from '../Components/Menu';

export default function Contact(){
    return(
        <div>
            <Menu />
            <br />
            <br />
            <br />
            <br />
            <h1 className="contactTitle">Get In Touch</h1>
            <div className="contact">
            
            <div className="illustration">
                <h1>Illustration here</h1>
            </div>
                <div className="contactForm">
                    <form>
                    <input type="text" placeholder="Your Name..." />
                    <br/>
                    <br/>
                    <input type="email" placeholder="Your Email..." />
                    <br/>
                    <br/>
                    <textarea rows="6" placeholder="Your Messsage"></textarea>
                    <br/>
                    <br/>
                    <input type="submit" className="button" value="Send Message" />
                    </form>                    
                </div>
            </div>
            </div>
    );
}