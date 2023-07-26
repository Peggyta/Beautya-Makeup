import React from 'react';
import Link from 'next/link';

const CountriesList = ({country}) => {
    return (
        <div className='flex gap-2' >
            <Link href={`/branches/all-branches/${country.country}`}>{country.country}</Link>
            {/* <Link href={`/branches/all-branches/${country.branches}`}>{country.name}</Link>
            <Link href={`/branches/all-branches/${country.branches}`}>({country.amount})</Link> */}
        </div>
    );
};

export default CountriesList;