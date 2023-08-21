import React from 'react';
import offer from '../../../public/images/offer.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Offer = () => {
    return (
        <div className='flex items-center lg:items-stretch lg:items-between lg:flex-row
        flex-col justify-center mt-12 px-4 text-raven'>
            <div>
                <Image src={offer} alt='skin-care' width={575} height={382} />
            </div>
            <div className='bg-rose flex justify-evenly flex-col 
             pr-4 sm:w-575 w-full md:pl-10 pl-4'>
                <div className='pt-3'>
                    <h3 className='hidden lg:block font-bold text-2xl'>Special offers</h3>
                    <p className='font-bold text-lily text-3xl py-2 hidden md:block'>
                        Save up to 50%
                    </p>
                    <p className='font-semibold md:font-normal'>
                        Mother`s Day is coming! 
                    </p>
                    <p>For everything she`s given you, it`s time to give back. 
                    Shower her with love, happiness, and the best of Beautya.</p>
                    <p className='text-lily font-semibold py-2'>visit your local beautya branches to find out more 
                    about our special offers in make up and skincare products.</p>
                </div>
                <div className='flex md:justify-end justify-evenly w-full lg:mt-0 mt-2 pb-6 lg:pb-0'>
                        <Link 
                        href='/branches/all-branches'
                        className='sm:text-base text-lily text-sm md:bg-lily 
                        md:text-white py-3 px-8 md:border-transparent border border-lily'>
                            Find Branches
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;