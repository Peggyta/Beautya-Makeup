import React from 'react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import BlogCard from '../module/blog/BlogCard';
import "react-loading-skeleton/dist/skeleton.css";

const Blog = ({data}) => {

    return (
        <div className='max-w-8xl text-raven'>
            <div className='flex gap-2 font-semibold text-sm pt-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-raven' href='/blog'>Blog</Link>
            </div>
            <h2 className=' font-bold text-3xl my-3'>Blog</h2>
            <div className='max-w-6xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 mt-12 mb-16'>
                {data.map((item)=> {
                return(
                        <BlogCard key={item._id} {...item} />       
                )
                }) || <Skeleton />}
            </div>
        </div>
    );
};

export default Blog;