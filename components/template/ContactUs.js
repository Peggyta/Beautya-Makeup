import React from 'react';
import Link from 'next/link';
import WriteUs from '../module/contact/WriteUs';

const ContactUs = () => {
    return (
        <div className='max-w-8xl mx-auto px-12 text-raven'>
            <div className='flex gap-2 font-semibold text-sm md:px-0 px-4 pt-6 mt-6 md:mt-0 md:pb-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-raven' href='/contact-us'>Contact Us </Link>
            </div>
            <h2 className='font-bold text-3xl pb-4'>Contact Us</h2>
            <p className='text-lg'>Beautya Client Service Center Is Happy to Help You With Any 
                Questions You May Have Regarding Our Products And Corporate Information.</p>
            <p className='text-lg py-2'>Contact Us by Phone: 1-802-526-2463 Monday to Friday, 9am to 9pm, 
                and Saturday-Sunday, 9am to 6pm Or<br/> Fill in The Form Below to Send Us An Email.</p>
            <p className='text-sm text-cement'>Please fill in this form to send us your inquiry. We'll be more 
                than happy to help and will reply to you as soon as possible.</p>
            <WriteUs />
        </div>
    );
};

export default ContactUs;