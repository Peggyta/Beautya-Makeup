import React from 'react';
import Link from 'next/link';

const ListOfCountries = () => {
    
    return (
        <div className='border grid lg:grid-cols-4 md:grid-cols-3 text-raven  
            sm:grid-cols-2 grid-cols-1 gap-6 bg-white place-items-center mt-6 py-16'> 
                <Link href='/branches/all-branches/Australia'>Australia</Link>
                <Link href='/branches/all-branches/Austria'>Austria</Link>
                <Link href='/branches/all-branches/Brazil'>Brazil</Link>
                <Link href='/branches/all-branches/Canada'>Canada</Link>
                <Link href='/branches/all-branches/China'>China</Link>
                <Link href='/branches/all-branches/Germany'>Germany</Link>
                <Link href='/branches/all-branches/Ghana'>Ghana</Link>
                <Link href='/branches/all-branches/France'>France</Link>
                <Link href='/branches/all-branches/Hong-Kong'>Hong Kong</Link>
                <Link href='/branches/all-branches/Irenland'>Ireland</Link>
                <Link href='/branches/all-branches/India'>India</Link>
                <Link href='/branches/all-branches/Korea'>Korea</Link>
                <Link href='/branches/all-branches/Saudi%20Arabia'>Saudi Arabia</Link>
                <Link href='/branches/all-branches/Singapore'>Singapore</Link>
                <Link href='/branches/all-branches/Turkey'>Turkey</Link>
                <Link href='/branches/all-branches/United%20States'>United States</Link>
        </div>  
    );
};

export default ListOfCountries;