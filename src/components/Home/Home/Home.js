import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import ParticleElement from '../../ParticleElement/ParticleElement';


import Portfolio from '../../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>

            <ParticleElement />
            <div>
                <About />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
};

export default Home;