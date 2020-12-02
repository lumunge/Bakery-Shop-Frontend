import React from 'react';
import Menu from '../Components/Menu';

export default function About(){
    return(
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

        <div className="mainAbout">
        <h1><i class="fas fa-quote-left"></i> clean, non-gmo, gluten-free and plant based ingredients</h1>
            <p>About the company</p>
            <hr/>
            <div className="about about1">
                <div className="gif1">gify here</div>
                <div>
                    <h2>Convenience</h2>
                    <p>text about convenience and how people would prefer creme cakes</p>
                </div>
            </div>
            <div className="about about2">
            <div className="gif2">gify here</div>
                <div>
                    <h2>Taste</h2>
                    <p>text about convenience and how people would prefer creme cakes</p>
                </div>
            </div>
            <div className="about about1">
            <div className="gif3">gify here</div>
                <div>
                    <h2>Warmth</h2>
                    <p>text about convenience and how people would prefer creme cakes</p>
                </div>
            </div>
        </div>
        <div className="founder">
            <div>
            <p>My story begins with a question: How do I live a full life without regrets? 
                A few things I’ve learned since beating cancer: Try new things. Work out. 
                Experience the world. And treat yourself. Living a full life also meant taking 
                control over my health, happiness and wellbeing: beginning with the food I eat 
                every day. I cut out hydrogenated oils, high fructose corn syrup, artificial flavors, 
                most dairy, and anything I couldn’t pronounce. And replaced those foods with clean ones. 
                In a very short amount of time, I felt more energetic, more alive, more me.</p>
                </div>
                <div>
                    <p>image here</p>
                </div>
        </div>
        <div className="community">
            <form>
                <div>
                    <input type="text" name="name" required placeholder="Your Name..." />
                </div>
                <div>
                    <input type="text" name="email" required placeholder="Email Address..." />
                </div>
                <div>
                    <input type="text" name="number" required placeholder="Phone Number..." />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

        <div className="productAbout">
            <h2>The rest of the products here</h2>
        </div>

        </div>
        </div>
    );
}