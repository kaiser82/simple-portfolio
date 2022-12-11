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
        <div className="hero  bg-base-200 lg:py-10">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Contact Me!</h1>

                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className='label label-text'>Name</label>
                                <input type="text" name="user_name" />
                            </div>
                            <div className="form-control">
                                <label className='label label-text'>Email</label>
                                <input type="email" name="user_email" required />
                            </div>
                            <div className="form-control">
                                <label className='label label-text'>Message</label>
                                <textarea name="message" required placeholder='Write your message...' />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;