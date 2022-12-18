import React from 'react';
import image from '../../assets/me/profile1.png'
import resume from '../../assets/kaiser_ahmed_resume.pdf'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div><img src={image} className=" w-full rounded-lg shadow-2xl" alt='profile' /></div>
                <div className='w-full'>
                    <h1 className="text-5xl font-bold pb-4">Kaiser Ahmed</h1>
                    <h2 className="text-3xl font-bold">Web Developer, <br /> comfortable with MERN Stack</h2>
                    <p className="py-6">The goal isn't to build a website. The goal is to build your business.</p>
                    <div className='space-x-5'>
                        <button className="btn btn-primary"><Link to='/aboutmore'>More About ME</Link> </button>
                        <button className="btn btn-primary"><a href={resume}>My Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;