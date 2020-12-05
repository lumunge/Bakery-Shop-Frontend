import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store';
import { mailList } from '../Actions/maillistActions';



class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    joinComm = (e) => {
        e.preventDefault();
        const client = {
            email: this.state.email
        };
        this.props.joinComm(client)
    };

    render() {
        return (
            <Provider store={store}>
            <div>
            <Menu />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <div className="aboutLanding">
            <h2>A Little About Creme Cakes</h2>
        </div>

        <div className="aboutContent">

        <h1 className="motto"><i class="fas fa-quote-left"></i> clean, non-gmo, gluten-free and plant based ingredients</h1>

        
        <div className="mainAbout">
        <Zoom left>
            <div className="about about1">
            <Fade left cascade>
                <div className="gifCover">
                <div className="gif1"></div>
                </div>
            </Fade>
            <Fade right cascade>
                <div className="desc">
                    <h1>Convenience</h1>
                    <p>text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    </p>
                </div>
                </Fade>
            </div>
            </Zoom>
            <Zoom right>
            <div className="about about2">
            <Fade left cascade>
                <div className="gifCover">
                <div className="gif2"></div>
                </div>
            </Fade>
            <Fade right cascade>
                <div className="desc">
                    <h1>Taste</h1>
                    <p>text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    </p>
                </div>
            </Fade>
            </div>
            </Zoom>
            <Zoom left>
            <div className="about about1">
            <Fade left cascade>
            <div className="gifCover">
            <div className="gif3"></div>
            </div>
            </Fade>
            <Fade right cascade>
                <div className="desc">
                    <h1>Warmth</h1>
                    <p>text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    text about convenience and how people would prefer creme cakes
                    </p>
                </div>
                </Fade>
            </div>
            </Zoom>
        </div>
        
        <div className="founder">
            <h1 class="aboutText"><Bounce left cascade>Get To know Our Founder <span>Bakery Owner</span></Bounce></h1>
            <div>
            <p><Slide left cascade>My story begins with a question: How do I live a full life without regrets? 
                A few things I’ve learned since beating cancer: Try new things. Work out. 
                Experience the world. And treat yourself. Living a full life also meant taking 
                control over my health, happiness and wellbeing: beginning with the food I eat 
                every day. I cut out hydrogenated oils, high fructose corn syrup, artificial flavors, 
                most dairy, and anything I couldn’t pronounce. And replaced those foods with clean ones. 
                In a very short amount of time, I felt more energetic, more alive, more me.</Slide></p>
                </div>
                <div className="image">
                <Fade bottom>
                    <div className="userImage"></div>
                </Fade>
                </div>
        </div>
        <div className="statistics">
            <div>
                <h4>Years Of Experience</h4>
                <p><Roll left cascade>10</Roll></p>
            </div>
            <div>
                <h4>Number of Satisfied Customers</h4>
                <p><Roll right cascade>1700</Roll></p>
            </div>
        </div>
        <div className="community">
            <h1>Join Our Community of Fellow Cake Lovers and Receive Free Recepies</h1>
            <form onSubmit={this.joinComm}>
                <div>
                    <input type="text" name="email" required placeholder="Email Address..." />
                </div>
                <div>
                    <button className="aboutButton" type="submit">Submit</button>
                </div>
            </form>
        </div>

        <div className="productAbout">
            <h2>The rest of the products here</h2>
        </div>

        </div>
        <Footer/>
        </div>
        </Provider>
        )
    }
}

export default connect(
    (state) => ({
        client: state.client.client,
    }),
    { mailList }
)(About);