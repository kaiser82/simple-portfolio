import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://kaiser-portfolio-client.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='min-h-screen bg-base-200'>
            <h2 className='text-4xl font-bold text-center uppercase py-5'>My Projects</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    projects.map((project) => <ProjectCard key={project._id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;