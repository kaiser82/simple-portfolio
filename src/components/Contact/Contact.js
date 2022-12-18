import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v3323eh', 'template_j7043na', form.current, 'i4zTuJa847W5Yj-XC')
            .then((result) => {
                console.log(result.text);
                toast.success('Message send successful.')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        // <div className="hero  bg-base-200 lg:py-10">
        //     <div className="hero-content flex-col ">
        //         <div className="text-center lg:text-left">
        //             <h1 className="text-4xl font-bold">Contact Me!</h1>

        //         </div>
        //         <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
        //             <div className="card-body">
        //                 <form ref={form} onSubmit={sendEmail}>
        //                     <div className="form-control">
        //                         <label className='label label-text'>Name</label>
        //                         <input type="text" name="user_name" />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className='label label-text'>Email</label>
        //                         <input type="email" name="user_email" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className='label label-text'>Message</label>
        //                         <textarea name="message" required placeholder='Write your message...' />
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <input className='btn btn-primary' type="submit" value="Send" />
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <section className="py-6 md:py-12 lg:py-24 bg-base-200">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Mymensingh, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+8801717840035</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>dr.kaiserahmed@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" name="user_name" placeholder="Your name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-pramary dark:bg-gray-800 p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" name="user_email" placeholder="Your email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" name="message" placeholder='Your message...' className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2"></textarea>
                    </label>

                    <input className='btn btn-primary' type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;