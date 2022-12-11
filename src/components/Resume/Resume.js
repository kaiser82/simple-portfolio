import React from 'react';
import resume from '../../assets/kaiser_ahmed_resume.pdf'

const Resume = () => {
    return (
        <div>
            <button className='btn'><a href={resume}>Download Resume</a> </button>

        </div>
    );
};

export default Resume;