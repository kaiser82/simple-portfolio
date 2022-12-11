import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const details = useLoaderData()
    const { projectName, technologyUsed, Features, about, liveSite, img } = details;
    console.log(details)

    return (
        <div className='min-h-screen'>
            <h2 className='text-5xl font-bold text-center py-5'>Project Name: {projectName}</h2>
            <h5 className='text-3xl font-bold text-center'>Project About: {about} </h5>

            <div className="carousel w-1/2 mx-auto mt-10">
                <div id="item1" className="carousel-item w-full">
                    <img src={img.img1} className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img.img2} className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img.img3} className="w-full" alt="" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img?.img4} className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className='text-center py-5'>
                <p className='text-2xl'>Technology Used: {technologyUsed}</p>
                <p className='text-xl font-bold'>Features:</p>
                <ul>
                    {
                        Features.map((feature, index) => <li key={index}>*{feature}</li>)
                    }
                </ul>
            </div>
            <div className='text-center mb-5'>
                <button className='btn btn-primary'><a href={liveSite}>Live Site</a></button>
            </div>

        </div>
    );
};

export default ProjectDetails;