import Link from 'next/link';
import React from 'react';
//icon
import Near from '@/components/icons/Near';

const BranchSearchBar = () => {
    
    return (
        <div className='max-w-8xl mx-auto'>
            <h2 className='text-raven font-bold text-3xl my-3'>Beautya Branches</h2>
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
                <div className='w-full md:w-3/4 flex md:flex-row flex-col items-center lg:gap-4 gap-3'>
                <div className='text-cement text-sm flex flex-col justify-center lg:w-464 md:w-80 pt-5 w-full '>
                    <input className='py-3 pl-4 text-lg border-b border-cement' placeholder='Address' />
                    <p className='mt-1 pl-4'>City, Street Or Zip Code</p>
                </div>
                    
                    <button className='bg-berry hover:bg-neon transition ease-in
                        lg:w-44 text-white py-2 md:w-36 w-full mt-2 md:mt-0'>Search
                    </button>
                    <p>Or</p>
                    <div className='relative lg:w-44 md:w-36 w-full '>
                        <button className='w-full py-2 pl-2 text-berry border-2 w-full border-berry'>Around Me</button>
                        <div className='absolute top-2.5 lg:left-5 md:left-2 hidden md:block'><Near /></div>
                    </div>
                </div>
                <div className='text-raven pl-3 w-36 md:my-0 my-8'>
                    <Link href='/branches/all-branches'>View All Branches</Link>
                </div>
            </div>
            
            <div className='flex justify-between mt-10'>
                <div>search result</div>
                <div>branch map</div>
            </div>   
        </div>
    );
};

export default BranchSearchBar;