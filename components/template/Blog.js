import React from 'react';
import BlogCard from '../module/blog/BlogCard';

const Blog = ({data}) => {
    return (
        <div className='max-w-8xl text-raven'>
            <h2 className=' font-bold text-3xl my-3'>Blog</h2>
            <div className='max-w-6xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 mt-12 mb-16'>
                {data.map((item)=> {
                return(
                    <div >
                        <BlogCard key={item._id} {...item} />
                    </div> 
                )
                })}
            </div>
        </div>
    );
};

export default Blog;