import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

//icons
import BlogReddit from '@/components/icons/BlogReddit';
import BlogFB from '@/components/icons/BlogFB';
import BlogTwitt from '@/components/icons/BlogTwitt';
import BlogInsta from '@/components/icons/BlogInsta';
import Copy from '@/components/icons/Copy';


const LatestBlogs = () => {
    const[otherBlogs, setOtherBlogs] = useState([]);
    const router = useRouter();
    const {slug} = router.query;
   
    //fetching data client-side
    useEffect(()=>{
        fetch('/api/data')
        .then(res=> res.json())
        .then(data=> setOtherBlogs(data.data))
    },[]);

    const filterBlogs = otherBlogs.filter((item)=> item.slug !== slug);
    const randomBlogs = filterBlogs.slice(4,9);
    // console.log(randomBlogs);
    return (
        <div className='w-full flex flex-col mb-12'>
            <div className='flex lg:gap-6 md:gap-2 sm:gap-10 gap-4 px-2 items-center justify-center py-4
             border border-ash  fill-black'>
                <Copy />
                <BlogReddit />
                <BlogFB />
                <BlogTwitt />
                <BlogInsta />
            </div>
            <div className='mt-3'>
                <h3 className='text-raven font-bold text-2xl mb-3'>Latest</h3>
                <div>
                    {randomBlogs.map((item)=>{
                        return(
                            <Link key={item._id} href={item.slug}>
                                <div className='flex items-center text-raven border border-ash gap-2 mt-4'>
                                    <img className='lg:w-28 lg:h-28 w-20 h-20 object-cover' 
                                    src={`/images/${item.slug}.jpg`} />
                                    <p className='text-sm'>{item.title}</p>
                                </div>           
                            </Link>      
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;