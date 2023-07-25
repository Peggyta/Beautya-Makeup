import React from 'react';
//icons
import LocationSign from '../icons/LocationSign';
import Phone from '../icons/Phone';
import Street from '../icons/Street';
import Time from '../icons/Time';
import Link from 'next/link';

const BranchesOfCountry = ({branch}) => {
    const{branches:[
        {title, distance, street, phone, status, work} 
    ]} = branch ;
    return (
            <div className='w-80 mx-auto py-6 px-3 text-raven flex flex-col gap-5 border border-ash'>
            <div className='flex gap-2 items-center'>
                <LocationSign />
                <h3 className='text-lg font-bold'>{title}</h3>
                <p className='text-xs text-neutral'>({distance} Kms)</p>
            </div>
            <div className='text-sm flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <Street />
                    <p>{street}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Phone />
                    <p>{phone}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Time />
                    <p><span className='font-bold'>{status}</span> {work}</p>
                </div>
                <div className='border border-raven flex justify-center'>
                    <Link className='py-2 w-full text-center' href='/'>More Details</Link>
                </div>
            </div>
        </div>
    );

};

export default BranchesOfCountry;