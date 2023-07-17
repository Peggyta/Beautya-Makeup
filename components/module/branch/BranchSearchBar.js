import Link from 'next/link';
import React from 'react';
//icon
import Near from '@/components/icons/Near';

const BranchSearchBar = () => {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <input className='w-464 py-2 pl-4 border-b border-cement' placeholder='Address' />
                    <button className='bg-berry w-44 text-white py-2'>Search</button>
                    <p>Or</p>
                    <div className='relative'>
                        <button className='w-44 py-2 text-berry border-2 border-berry'>Around Me</button>
                        <div className='absolute top-2.5 left-5'><Near /></div>
                    </div>
                </div>
                <div className='text-raven'>
                    <Link href='/all-branches'>View All Branches</Link>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>search result</div>
                <div>branch map</div>
            </div>   
        </div>
    );
};

export default BranchSearchBar;