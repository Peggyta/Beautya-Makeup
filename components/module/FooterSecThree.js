import React from 'react';
//icons
import Reddit from '../icons/Reddit';
import FB from '../icons/FB';
import Pinterest from '../icons/Pinterest';
import TikTok from '../icons/TikTok';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Call from '../icons/Call';
import Place from '../icons/Place';

const FooterSecThree = () => {
    return (
        <div className='bg-sangria w-full'>
            <div className='max-w-640 md:max-w-none h-40 py-4 lg:py-0 lg:h-16 flex-col flex 
                md:flex-row font-normal md:items-center lg:px-16 md:px-6 px-6 mx-auto justify-between'>
                <div className='text-white flex flex-col lg:flex-row'>
                    <div className='flex items-center gap-2'>
                        <Place />
                        <p>Dr. Richardson, California</p>
                        <span className='px-4 hidden lg:block text-neon'>|</span>
                    </div>
                    <div className='flex gap-2 pt-6 lg:pt-0'>
                        <Call />
                        <p>1-802-526-2463</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <a href='#'target='_blank' rel='noopener noreferrer'><Instagram /></a>
                    <a href='#'target='_blank' rel='noopener noreferrer'><FB /></a>
                    <a href='#'target='_blank' rel='noopener noreferrer'><Twitter /></a>
                    <a href='#'target='_blank' rel='noopener noreferrer'><Pinterest /></a>
                    <a href='#'target='_blank' rel='noopener noreferrer'><Reddit /></a>
                    <a href='#'target='_blank' rel='noopener noreferrer'><TikTok /></a>
                </div>
            </div>
        </div>
    );
};

export default FooterSecThree;