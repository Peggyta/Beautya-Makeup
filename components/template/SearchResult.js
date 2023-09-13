import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import ProductCard from '../module/makeup/ProductCard';

const SearchResult = ({data}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(data) setIsLoading(false)
    },[]);

    function getData() {
        if (isLoading) return <div>Loading...</div>;
        if (data.length) {
            return data.map((item)=> {
                return (
                
                    <ProductCard key={item._id} {...item} />
                   
                )})
            }
        return <div>No result available.</div>;
      };

    return (
        <div className='max-w-8xl mx-auto lg:px-10 md:px-6 px-4 text-raven pb-6'>
            <div className='flex gap-2 font-semibold text-sm pb-3 pt-6 mt-6 md:mt-0 md:pb-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <p className='text-raven'>Search Result </p>
            </div>
                <div className='w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                    md:gap-6 gap-10 pt-10 mt-6 md:mt-0 pb-16'>
                    {getData()}
                </div>
        </div>
    );
};

export default SearchResult;