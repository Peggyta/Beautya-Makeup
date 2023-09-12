import React from 'react';
import GreySearch from '@/components/icons/GreySearch';

const SearchBar = () => {
    return (
        <>
        <div className='flex w-full px-10 items-center border-b border-ash'>
            <GreySearch />
            <input className='w-full focus:outline-none py-4 bg-dust text-xl text-cement pl-3' type='text' placeholder='What Are You Looking For?' />
        </div>
        <div className='backdrop-blur-md brightness-50 min-h-screen 
        absolute z-20 w-full'></div>
        </>
    );
};

export default SearchBar;