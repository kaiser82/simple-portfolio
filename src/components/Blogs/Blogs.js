import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 min-h-screen flex text-center items-center">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-7xl tracking-tighter font-bold">
                        Coming Soon...........
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Working on it:</span>
                        <span className="font-bold text-lg">TECH BLOGS</span>
                    </div>
                    <Link to='/' className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;