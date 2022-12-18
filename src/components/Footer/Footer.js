import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-8 bg-neutral text-neutral-content rounded">

            <div>
                <div className="grid grid-flow-col gap-4 items-center">
                    <a href='https://www.linkedin.com/in/kaiser-ahmed11/' target='_blank' rel="noopener noreferrer">
                        <FaLinkedin className='w-8 h-8' />
                    </a>
                    <a href='https://github.com/kaiser82' target='_blank' rel="noopener noreferrer">
                        <FaGithub className='w-8 h-8' />
                    </a>
                    <a href='https://www.facebook.com/dr.kaiser.ahmed/' target='_blank' rel="noopener noreferrer">
                        <FaFacebookSquare className='w-8 h-8' />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;