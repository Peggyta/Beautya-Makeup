import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LatestBlogs from '../module/blog/LatestBlogs';


const BlogDetails = (props) => {
    const{title, slug, description, category, author, published, more, usage} = props;
    
    //to show the first letter larger than rest of the text
    const selectDescription = description.toString().split('');
    const selectFirstLetter = selectDescription[0];
    const newDescription = selectDescription.slice(1).join('');

    return (
        <div className='flex gap-6 md:flex-row flex-col max-w-8xl px-12 mx-auto md:mt-0 mt-6'>
            <div className='md:w-3/4 w-full text-raven mb-12'>
            <div className='flex gap-2 font-semibold text-sm py-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-cement' href='/blog'>Blog /</Link>
                <Link className='text-raven' href={`/blog/${slug}`}>{slug}</Link>
            </div>
                <img className='w-full h-474 object-cover' src={`/images/${slug}.jpg`} alt='blog' />
                <h2 className='font-bold md:text-3xl text-xl pb-4 pt-6'>{title}</h2>
                <div className='flex sm:text-base font-semibold text-xs sm:gap-1 text-cement pb-4'>
                    <p>{category}</p>
                    <span>|</span>
                    <p>{author}</p>
                    <span>|</span>
                    <p>{published}</p>
                </div>
                <p className='text-lg text-justify'>
                    <span className='font-bold sm:text-6xl text-3xl'>{selectFirstLetter}</span>
                    {newDescription}
                </p>
                <div>
                    <h3 className='font-bold text-xl pt-2 pb-3'>Avoid popping pimples</h3>
                    <p className='text-lg text-justify'>{more}</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl pt-2 pb-3'>Wash twice daily, and again after sweating</h3>
                    <p className='text-lg text-justify'>{usage}</p>
                </div>
            </div>
            <div className='md:w-1/4'>
                <LatestBlogs />
            </div>
        </div>
    );
};

export default BlogDetails;