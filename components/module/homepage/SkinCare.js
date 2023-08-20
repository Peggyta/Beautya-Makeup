import React from 'react';
import Image from 'next/image';
import skinCare from '../../../public/images/skincare.jpg';
import barCode from '../../../public/images/barcode.jpg';

const SkinCare = () => {
    return (
        <div className='flex items-center lg:items-stretch lg:items-between lg:flex-row
        flex-col-reverse justify-center mt-10 px-4'>
            <div className='lg:bg-jam bg-rose flex justify-evenly flex-col 
            lg:text-white text-raven pr-4 sm:w-600 w-full md:pl-10 pl-4'>
                <div>
                    <h3 className='hidden lg:block font-bold text-2xl'>NEW Virtual Skincare Analysis</h3>
                    <p className='text-sm pt-3'>
                        Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool<br /> 
                        evaluates your skin and provides the most personalized<br className='lg:block hidden' /> recommendations.
                    </p>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='py-2 lg:py-0 lg:block flex lg:mx-0 mx-auto w-full justify-between items-center'>
                        <p className='font-semibold lg:block hidden'>Scan with your phone to get started</p>
                        <p className='lg:block hidden'>Or</p>
                        <button className='lg:border lg:border-white px-3 py-2 hover:border-neon 
                         hover:text-neon transition sm:text-base text-sm border-transparent lg:text-white text-lily'>
                            Answer A Few Questions
                        </button>
                        <button className='block sm:text-base text-sm lg:hidden bg-lily text-white py-3 px-8'>
                            Take A Selfie
                        </button>
                    </div>
                    <div className='hidden lg:block'>
                        <Image src={barCode} alt='barcode' width={100} height={100} />
                    </div>
                </div>
            </div>
            <div>
                <Image src={skinCare} alt='skin-care' width={600} height={281} />
            </div>
            <div className='block py-2 lg:hidden'>
                <h3 className='text-raven font-bold text-2xl text-center'>
                    Virtual Skincare Analysis
                </h3>
            </div>
        </div>
    );
};

export default SkinCare;