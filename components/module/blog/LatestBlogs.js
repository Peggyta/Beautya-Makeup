import React from 'react';
//icons
import BlogReddit from '@/components/icons/BlogReddit';
import BlogFB from '@/components/icons/BlogFB';
import BlogTwitt from '@/components/icons/BlogTwitt';
import BlogInsta from '@/components/icons/BlogInsta';
import Copy from '@/components/icons/Copy';


const LatestBlogs = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='flex lg:gap-6 md:gap-2 px-2 items-center justify-center py-4
             border border-ash  fill-black'>
                <Copy />
                <BlogReddit />
                <BlogFB />
                <BlogTwitt />
                <BlogInsta />
            </div>
            <div className='mt-3'>
                <h3 className='text-raven font-bold text-2xl mb-3'>Latest</h3>
            </div>
        </div>
    );
};

export default LatestBlogs;