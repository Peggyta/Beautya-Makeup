import React from 'react';
import Bunny from '../icons/Bunny';
import Lamp from '../icons/Lamp';
import Wheat from '../icons/Wheat';
import Leaf from '../icons/Leaf';

const FooterSecOne = () => {
    return (
        <div className='bg-rose flex justify-center '>
            <div className='md:w-full grid grid-cols-2 md:grid-cols-4 px-4 md:place-items-center place-items-start text-mulberry font-normal py-6 gap-6'>
                <div className='flex items-center gap-4'>
                    <Bunny />
                    <p>No tests on animals</p>
                </div>
                <div className='flex items-center gap-4'>
                    <Leaf />
                    <p>No animal-derived ingredients</p>
                </div>
                <div className='flex items-center gap-4'>
                    <Wheat />
                    <p>No gluten, or gluten byproducts</p>
                </div>
                <div className='flex items-center gap-4'>
                    <Lamp />
                    <p>Recyclable packaging</p>
                </div>
            </div>
        </div>
    );
};

export default FooterSecOne;