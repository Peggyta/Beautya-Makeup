import React from 'react';
import global from '../../../public/images/global.jpg';
import Image from 'next/image';

const GlobalBranches = () => {
    return (
        <div className='w-full text-raven lg:-mt-10 md:-mt-40 sm:-mt-32 '>
           <div className='bg-eggplant flex justify-center relative pt-28'>
                <div className='relative '>
                    <Image src={global} width={890} height={460} alt='map' priority={true}/>
                        <div className='branch-number md:top-28 md:left-14 sm:top-20 sm:left-8 
                            px-2 md:py-6 md:w-20 sm:w-16 sm:py-4 w-12 top-10 left-4 py-3'>1760+
                        </div>
                        <div className='branch-number md:top-56 md:left-28 px-2 py-1 sm:w-9 
                            sm:top-48 sm:left-24 top-20 left-16 w-7'>60+
                        </div> 
                        <div className='branch-number md:top-28 md:left-96 px-2 sm:py-4 sm:w-16 sm:top-24 
                            sm:left-80 top-10 left-40 w-12 py-3'>960+
                        </div> 
                        <div className='branch-number md:top-72 md:right-80 px-2 sm:py-1 w-9 sm:top-56 
                            sm:right-64 top-28 right-36 py-2'>85+</div> 
                        <div className='branch-number md:top-56 md:right-64 px-2 sm:py-3 sm:w-14 sm:top-48 
                            sm:right-52 top-20 right-28 w-10 py-2'>110+
                        </div> 
                        <div className='branch-number md:top-36 md:right-6 px-2 py-4 sm:w-16 sm:top-28 
                            sm:right-4 right-2 top-12 w-14'>310+
                        </div> 
                </div>
                <div className='absolute text-white top-6 left-0 font-bold md:text-3xl md:w-520 w-5/6 h-32  pl-16 '>
                    <p>We are in 36 markets with more than <span className='text-cherry'>3000</span> points of sale In 
                    over 30 Countries.</p>
                </div>
           </div>
            <div className='max-w-1016 mx-auto text-justify mb-16 px-6 lg:px-0'>
                <h3 className='font-bold text-2xl mt-6 mb-3'>Global branches & satisfied customers</h3>
                <p className='text-lg'>
                At Beautya, we are proud to have a global presence with branches 
                in multiple countries. Our mission is to provide high-quality cosmetic 
                products that cater to a diverse range of skin types and tones, while 
                also delivering exceptional customer service. Our team members are trained 
                to listen to customers' concerns and preferences, and they use their expertise 
                to recommend products that are tailored to their individual needs. In this 
                section, we will provide an overview of our company's branches and the unique 
                services they offer, as well as share some of the positive feedback we have 
                received from our satisfied customers.
                </p>
            </div> 
        </div>
    );
};

export default GlobalBranches;