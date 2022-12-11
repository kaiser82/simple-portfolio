import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    // console.log(project)

    const { _id, about, img, liveSite, projectName } = project
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img.home} alt="project" /></figure>
            <div className="card-body">
                <h2 className="card-title">{projectName}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary btn-sm"><Link to={`/projectDetails/${_id}`} >Show Details</Link></button>
                    <button className="btn btn-primary btn-sm"><a href={liveSite}>Live site</a></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;