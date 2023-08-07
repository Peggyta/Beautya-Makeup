import React from 'react';
import ListOfCountries from '../module/branch/ListOfCountries';
import Link from 'next/link';

const AllBranches = () => {
    //to filter duplicate name of countries
    // function filterDuplicate(data) {
    //     return data.filter((item,index)=> data.findIndex(i=> i.country === item.country) === index)
    // };
    return (
        <div className='max-w-8xl mx-auto px-12 text-raven md:px-10 px-4 bg-dust'>
            <div className='flex gap-2 font-semibold text-sm pt-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-cement' href='/branches'>Branches / </Link>
                <Link className='text-raven' href='/branches/all-branches'>All Branches</Link>
            </div>
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
                    <ListOfCountries />
            </div>  
    );
};

export default AllBranches;