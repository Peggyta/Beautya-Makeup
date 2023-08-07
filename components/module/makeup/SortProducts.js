import React, {useState} from 'react';
import FilterIcon from '@/components/icons/FilterIcon';
import FilterProducts from './FilterProducts';

const SortProducts = () => {
    const[open, setIsOpen] = useState(false);
    return (
        <div className='max-w-8xl mx-auto'>
        <div className='flex justify-between lg:pr-4 flex-row text-raven mt-4 gap-3 items-center'>
             <h3 className='font-bold text-xl lg:block hidden'>Filter</h3>
             <div className='lg:hidden block bg-white border border-ash w-32 
             flex items-center justify-center px-2 gap-1 py-2'>
                <FilterIcon />
                <button onClick={()=> setIsOpen(!open)} className='font-bold text-sm'>Filter</button>
             </div>
                <select className='lg:border-inherit py-2 text-sm font-bold border border-ash 
                bg-white px-1'>
                    <option>Sort: Recommended</option>
                    <option>Higher Price</option>
                    <option>Lower Price</option>
                </select>
        </div>
        <div className={open ? 'w-full block': 'hidden'}>
                    <FilterProducts/>
            </div>
        </div>
    );
};

export default SortProducts;