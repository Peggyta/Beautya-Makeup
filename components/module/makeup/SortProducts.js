import React from 'react';

const SortProducts = () => {
    return (
        <div className='max-w-8xl mx-auto'>
        <div className='flex justify-between flex-row text-raven mt-4 sm:px-4 gap-3 items-center'>
             <h3 className='font-bold text-xl'>Filter</h3>
                <select>
                    <option>Sort: Recommended</option>
                    <option>Higher Price</option>
                    <option>Lower Price</option>
                </select>
        </div>
        </div>
    );
};

export default SortProducts;