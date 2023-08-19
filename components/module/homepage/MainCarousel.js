import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image';
import slideOne from '../../../public/images/slide1.jpg';
import slideTwo from '../../../public/images/slide2.jpg';
import Link from 'next/link';

const MainCarousel = () => {
    return (
        <div className='w-full h-full mt-6 md:mt-0'>
            <Carousel 
            showStatus={false} 
            autoPlay={true} 
            showThumbs={false}
            infiniteLoop={true} 
            interval={3000}>
                <div className='relative z-10'>
                    <div className='brightness-50'>
                        <Image priority={true} src={slideOne} alt='slide-1' width={1280} height={720} />
                    </div> 
                    <div className='absolute z-20 sm:bottom-20 bottom-10 mx-auto w-full'>
                        <h2 className='text-white font-bold md:mb-8 mb-3 md:text-5xl sm:text-2xl text-xl'>
                            Unlock Your Natural Glow 
                        </h2>
                        <Link className='text-white border border-white px-8 md:py-3 sm:py-2
                         hover:bg-sangria hover:opacity-75 hover:border-neon py-2' 
                        href='/'>
                            Know More
                        </Link>
                    </div> 
                </div>
                <Image src={slideTwo} alt='slide-2' width={1280} height={720} />
            </Carousel>
        </div>
    );
};

export default MainCarousel;