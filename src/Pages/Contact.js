import React from 'react';
import Menu from '../Components/Menu';

export default function Contact(){
    return(
        <div className="contact">
            <Menu />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="landing">
                <h1>Hey There You can contact us here </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also 
                    the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing
                     Lorem Ipsum passages, and more recently with desktop publishing software like 
                     Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                            <textarea rows="5" placeholder="You message here.."></textarea>
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
                        <a href="#!"><i class="fab fa-facebook-square"></i></a>
                        <a href="#!"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}