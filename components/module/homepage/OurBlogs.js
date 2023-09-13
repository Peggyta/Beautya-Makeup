import React, {useState, useEffect} from 'react';
import BlogCard from '../blog/BlogCard';
import Link from 'next/link';

const OurBlogs = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('/api/data')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[])
    return (
        <div className='md:px-10 px-4 pt-2 mt-2'>
        <h3 className='text-center font-bold text-raven text-2xl mt-10 '>
            Our Blog
        </h3>
        <div className='md:flex justify-end xl:pr-24 lg:pr-20 pr-6 text-sm text-lily hidden'>
            <Link href='/blog'>View All</Link>
        </div>
        <div className='max-w-6xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 mt-4 md:pb-16 pb-6'>
                {data.length ? (data.slice(1,4).map((item)=>{
                    return <BlogCard key={item._id} {...item} />                  
                })) : <p className='text-center font-bold text-lg'>loading...</p>} 
        </div>
        <div className='md:hidden text-center text-sm text-lily block pb-16'>
            <Link href='/blog'>View All</Link>
        </div>
    </div>
    );
};

export default OurBlogs;