import React from 'react';
import Image from 'next/image';
import makeUpOne from '../../../public/images/1.jpg';
import makeUpTwo from '../../../public/images/2.jpg';
import makeUpThree from '../../../public/images/3.jpg';
import makeUpFour from '../../../public/images/4.jpg';

const MakeupCarousel = () => {
    return (
        <div className='w-max-8xl mx-auto md:mt-10 bg-jam relative z-10 pt-6 pb-12'>
            <div className='relative z-20 flex gap-4 justify-center px-4'>
                <Image src={makeUpOne} alt='makeup' width={288} height={288}  />
                <Image src={makeUpTwo} alt='makeup' width={288} height={288} />
                <Image src={makeUpThree} alt='makeup' width={288} height={288} />
                <Image src={makeUpFour} alt='makeup' width={288} height={288} />
            </div>
           <div className='text-center text-white text-lg mt-4'>
                <p>
                    <span className='font-bold text-base'>In just 1 week: </span> 
                    it appears firmer, stronger and smoother.
                </p>
                <p>
                    <span className='font-bold text-base'> In 3 weeks: </span> 
                    2x improvement in the look or feel of skin elasticity
                </p>
                <p> 
                    <span className='font-bold text-base'> After 1 month: </span>
                    The skin looks firmer+60% | The skin looks denser +56%
                </p>
           </div>
        </div>
    );
};

export default MakeupCarousel;