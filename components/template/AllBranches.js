import React from 'react';
import data from '@/utils/data';
import CountriesList from '../module/branch/CountriesList';

const AllBranches = () => {
    
    return (
        <div className='max-w-8xl mx-auto px-12 text-raven md:px-10 px-4 bg-dust'>
            <h2 className='font-bold text-3xl my-3'>All Branches</h2>
            <p className='md:text-lg text-base font-bold'>Discover Our Branches By Searching For Country Or Region Or Clicking
            On The Country Lists Below.</p>
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
                <div className='w-full md:w-3/4 flex md:flex-row flex-col items-center lg:gap-4 gap-3'>
                    <div className='text-cement text-sm flex flex-col justify-center lg:w-464 md:w-80 pt-5 w-full '>
                        <input className='py-3 pl-4 text-lg border-b border-cement' placeholder='Country Or Region' />
                        <p className='mt-1 pl-4'>City, Street Or Zip Code</p>
                    </div>
                        <button className='bg-berry hover:bg-neon transition ease-in
                        lg:w-44 text-white py-2 md:w-36 w-full mt-2 md:mt-0'>Search
                        </button>
                     </div>
                </div>
                <div className='border grid lg:grid-cols-4 md:grid-cols-3  
                sm:grid-cols-2 grid-cols-1 gap-6 bg-white place-items-center mt-6 py-16'>
                {data.countries.map((country)=> <div className='flex gap-2 text-raven text-lg' key={country.slug}>
                        <CountriesList country={country} />
                    </div>)}
                </div>
            </div>  
    );
};

export default AllBranches;