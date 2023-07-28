import { useRouter } from 'next/router';
import React from 'react';
import BranchCard from '../module/branch/BranchCard';
//icon
import Back from '../icons/Back';

const BranchesOfCountry = ({info}) => {
    const router = useRouter();
    const {country} = router.query;
    const filteredCountries = info.filter((item)=> item.country === country);
   const backHandler = () => {
    router.back()
   };

    return (
    <div className='max-w-8xl px-12 mt-6'>
        <div className='relative bg-jam rounded-lg py-1 w-24      '>
            <button className=' flex items-center gap-2  text-white' onClick={backHandler}>
            <Back/> Back</button>    
        </div>
        <div className='max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
            md:gap-6 gap-10 mt-16 mb-10 lg:px-6'>
            {filteredCountries.map((branches)=>{
                return(
                <BranchCard key={branches._id} {...branches} />)
            })}    
        </div>
    </div>
    );
};

export default BranchesOfCountry;