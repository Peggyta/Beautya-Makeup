import { useRouter } from 'next/router';
import React from 'react';
import BranchCard from '../module/branch/BranchCard';
import Link from 'next/link';

const BranchesOfCountry = ({info}) => {
    const router = useRouter();
    const {country} = router.query;
    const filteredCountries = info.filter((item)=> item.country === country);

    return (
    <div className='max-w-8xl px-12 mx-auto pt-6 md:mt-0 mt-6'>
        <div className='flex sm:flex-row flex-col gap-2 font-semibold text-sm '>
            <div>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-cement' href='/branches'>Branches / </Link>
            </div>
            <div className='flex'>
                <Link className='text-cement' href='/branches/all-branches'>All Branches /</Link>
                <p className='text-raven pl-1'> {country}</p>
            </div>
            
        </div>
        <div className='max-w-6xl grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
            md:gap-6 gap-10 sm:mt-16 mt-6 pb-10  '>
            {filteredCountries.map((branches)=>{
                return(
                <BranchCard key={branches._id} {...branches} />)
            })}    
        </div>
    </div>
    );
};

export default BranchesOfCountry;