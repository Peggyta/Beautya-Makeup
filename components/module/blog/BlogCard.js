import React from 'react';
// import { shortenText } from '@/helper/function';

const BlogCard = (props) => {
    const{title, category, author, published, slug, description} = props;
   
    return (
        <div className='flex flex-col md:w-392 w-full mx-auto border border-ash'>
            <div>
                <img className='h-294 md:w-392 w-full object-cover' src={`/images/${slug}.jpg`} alt='blog pic' />
                <h3 className='font-bold text-xl mt-4 pl-4'>{title}</h3>
            </div>
            <div className='flex sm:text-sm font-semibold text-xs px-4 gap-1 text-cement pt-1 pb-2'>
                <p>{category}</p>
                <span>|</span>
                <p>{author}</p>
                <span>|</span>
                <p>{published}</p>
            </div>
            <div className='px-4 pb-6'>
                <p>{(description[0]).slice(0,-135)+'...'}</p>
            </div>
        </div>
    );
};

export default BlogCard;