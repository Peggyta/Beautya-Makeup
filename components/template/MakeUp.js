import React from 'react';
import Link from 'next/link';
import ProductCard from '../module/makeup/ProductCard';
import FilterProducts from '../module/makeup/FilterProducts';
import SortProducts from '../module/makeup/SortProducts';

const MakeUp = ({data}) => {
    return (
        <div className='max-w-8xl mx-auto px-12 mt-6 md:mt-0'>
            <div className='flex gap-2 font-semibold text-sm pt-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <p className='text-raven'>Women MakeUp</p>
            </div>
            <h2 className='text-raven font-bold sm:text-3xl text-xl pt-6'>Women Makeup</h2>
            <SortProducts />
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/4 lg:block hidden'>
                    <FilterProducts />
                </div>
                <div className='w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 mt-4 mb-16'>
                    {data.map((product)=> {
                        return(  
                                <ProductCard key={product.slug}  {...product} />   
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default MakeUp;