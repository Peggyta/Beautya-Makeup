import React from 'react';
import samplePhoto from '../../../public/images/photo.jpg';
import Image from 'next/image';

const Inclusion = () => {
    return (
    <div className='w-full mt-6 max-w-1016 mx-auto relative lg:h-800 sm:h-screen'>
        <div className='bg-jam py-28 hidden sm:block'></div>
        <div className='sm:absolute sm:top-24 px-6'>
            <div className='flex flex-col lg:flex-row gap-6 items-center justify-center'>
                <div>
                    <Image
                        src={samplePhoto}
                        alt='sample-photo'
                        width={600}
                        height={402}
                        priority={true}
                    />
                </div>
                <div className='lg:max-w-500  '>
                    <h3 className='lg:text-white font-bold text-2xl '>Diversity equity & Inclusion</h3>
                    <p className='text-raven text-lg text-justify mt-6'>We believe that beauty is a form of self-expression 
                        and should be inclusive 
                        of all cultures and traditions, which is why we offer products that are 
                        inspired by diverse beauty rituals from around the world.
                    </p>
                </div>
            </div>
            <div className='mt-10 mb-6 md:mb-0  text-justify '>
                <h3 className='font-bold text-2xl mb-3'>Our Commitments</h3>
                <p className='text-lg'>
                    We believe that everyone deserves access to safe, effective, and
                    ethical cosmetic products, regardless of their lifestyle or dietary
                    restrictions. Our commitment to these values extends beyond our
                    product offerings to include sustainable and eco-friendly manufacturing
                    processes, ethical sourcing of ingredients, and giving back to the
                    communities we serve. At Beautya , we are proud to be a leader in the
                    ethical and sustainable beauty industry, and we look forward to 
                    continuing to innovate and push boundaries in our commitment to 
                    providing our customers with the best products and experiences possible
                </p>
            </div>
        </div>
    </div>
    );
};

export default Inclusion;