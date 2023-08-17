import React, {Component} from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import makeUpOne from '../../../public/images/1.jpg';
import makeUpTwo from '../../../public/images/2.jpg';
import makeUpThree from '../../../public/images/3.jpg';
import makeUpFour from '../../../public/images/4.jpg';

const MakeupCarousel = () => {
    return (
        <div className='w-max-8xl mx-auto md:mt-10 bg-jam pt-6 pb-12'>
            {/* a mobile version carousel: */}
            <div className='block md:hidden w-full px-6 mx-auto'>
                <Carousel showThumbs={false} autoPlay={true} showStatus={false} 
                infiniteLoop={true} interval={4000} showArrows={false}>
                    <Image src={makeUpOne} alt='makeup' width={288} height={288}  />
                    <Image src={makeUpTwo} alt='makeup' width={288} height={288} />
                    <Image src={makeUpThree} alt='makeup' width={288} height={288} />
                    <Image src={makeUpFour} alt='makeup' width={288} height={288} />
                </Carousel>
            </div>
            <div className='relative z-10'>
                <div className='relative z-20 gap-4 w-full justify-center px-4 hidden md:flex'>
                    <Image src={makeUpOne} alt='makeup'  sizes="(max-width: 768px) 100px 100px, (max-width: 1200px) 288px, 288px"   />
                    <Image src={makeUpTwo} alt='makeup' sizes="(max-width: 768px) 100px 100px, (max-width: 1200px) 288px, 288px" />
                    <Image src={makeUpThree} alt='makeup' sizes="(max-width: 768px) 100px 100px, (max-width: 1200px) 288px, 288px" />
                    <Image src={makeUpFour} alt='makeup' sizes="(max-width: 768px) 100px 100px, (max-width: 1200px) 288px, 288px" />
                </div>
                <div className='text-center text-white text-lg mt-4 px-6'>
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
        </div>
    );
};

export default MakeupCarousel;