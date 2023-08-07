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
        <div className='flex gap-2 font-semibold text-sm '>
            <Link className='text-cement' href='/'>Home / </Link>
            <Link className='text-cement' href='/branches'>Branches / </Link>
            <Link className='text-cement' href='/branches/all-branches'>All Branches /</Link>
            <Link className='text-raven' href={`${country}`}>{country}</Link>
        </div>
        <div className='max-w-6xl grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
            md:gap-6 gap-10 mt-16 mb-10  '>
            {filteredCountries.map((branches)=>{
                return(
                <BranchCard key={branches._id} {...branches} />)
            })}    
        </div>
    </div>
    );
};

export default BranchesOfCountry;