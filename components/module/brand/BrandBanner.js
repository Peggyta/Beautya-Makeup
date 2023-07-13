import React from 'react';
import Image from 'next/image';
import brandBanner from '../../../public/images/brand.jpg'

const BrandBanner = () => {
    return (
        <div className='w-full bg-jam lg:h-705 h-full flex flex-col lg:pb-0 pb-10 pt-8 text-white 
        px-12 mt-6 md:mt-0 md:px-6 items-center'>
            <div>
                <h2 className='font-bold text-3xl mb-2'>Our Brand</h2>
                <Image 
                    src={brandBanner} 
                    alt='banner'
                    width={1016} 
                    height={482}
                    priority={true}
                />
                <p className='text-lg mt-2 lg:tracking-wider'>We believe that beauty thrives in diversity and discovery. Our purpose is 
                to expand the way the world sees beauty by <span className='lg:block inline'>empowering the ExtraOrdinary 
                in each of us.</span></p>  
            </div>
        </div>
    );
};

export default BrandBanner;