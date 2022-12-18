import React from 'react';
import img from '../../assets/me/profile.png'
import resume from '../../assets/kaiser_ahmed_resume.pdf'
import Skills from './Skills';
import { Link } from 'react-router-dom';

const AboutMore = () => {
    return (

        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-center">Secret About Me!</h1>
                    <p className="py-6">Comfortable with MERN stack web development environment. Love to take challenges, can work both as a team and solo, and
                        have positive attitude of learning new technology...</p>
                    {
                        <Skills />
                    }
                    <div className='text-center my-5 space-x-5'>
                        <button className="btn btn-secondary"><Link to='/portfolio' >Some of My work</Link></button>
                        <button className="btn btn-primary"><a href={resume}>Download Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMore;