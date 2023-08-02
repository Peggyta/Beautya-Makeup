import React from 'react';
//icons
import Reddit from '@/components/icons/Reddit';
import FB from '@/components/icons/FB';
import Twitter from '@/components/icons/Twitter';
import Instagram from '@/components/icons/Instagram';
import Copy from '@/components/icons/Copy';


const LatestBlogs = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='flex lg:gap-6 md:gap-2 px-2 items-center justify-center py-4
             border border-ash  fill-black'>
                <Copy />
                <Reddit />
                <FB />
                <Twitter />
                <Instagram />
            </div>
            <div className='mt-3'>
                <h3 className='text-raven font-bold text-2xl mb-3'>Latest</h3>
            </div>
        </div>
    );
};

export default LatestBlogs;