import React, {useState} from 'react';
import Toggle from './Toggle';
import ArrowDown from '@/components/icons/ArrowDown';

const FilterProducts = () => {
    const[categoryOpen, setCategoryOpen] = useState(false);
    const[skinOpen, setSkinOpen] = useState(false);
    const[featuredOpen, setFeaturedOpen] = useState(false);
    const[priceOpen, setPriceOpen] = useState(false);

    return (
        <div className='bg-white'>
            <div className='flex border-t border-b border-ash justify-between h-14 items-center px-4 mt-4'>
                <p className='font-bold lg:text-base text-sm'>Out Of Stock Items</p>
                <Toggle />
            </div>
            <div className='mt-3 px-4 flex-col flex gap-6'>
                <div>
                    <div className='flex justify-between cursor-pointer' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <p className={categoryOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Category</p>
                        <div className={categoryOpen ? 'stroke-lily rotate-180 transition' : 'stroke-raven'}><ArrowDown /></div>
                    </div>
                    <div className={categoryOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>cleansers</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>exfoliators</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>toners</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>retinols</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>night Cream</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex justify-between cursor-pointer' onClick={() => setSkinOpen(!skinOpen)}>
                        <p className={skinOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Skin Condition</p>
                        <div className={skinOpen ? 'stroke-lily rotate-180 transition' : 'stroke-raven'}><ArrowDown /></div>   
                    </div>
                    <div className={skinOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>acne</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>hydration</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>redness</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex justify-between cursor-pointer' onClick={() => setFeaturedOpen(!featuredOpen)}>
                        <p className={featuredOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Featured</p>
                        <div className={featuredOpen ? 'stroke-lily rotate-180 transition' : 'stroke-raven'}><ArrowDown /></div>   
                    </div>
                    <div className={featuredOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>new</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>best sellers</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex justify-between cursor-pointer pb-3' onClick={() => setPriceOpen(!priceOpen)}>
                        <p className={priceOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Price</p>
                        <div className={priceOpen ? 'stroke-lily rotate-180 transition' : 'stroke-raven'}><ArrowDown /></div>   
                    </div>
                    <div className={priceOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>50 $ - 150 $</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>200 $ - 500 $</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>550 $ - 650 $</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'> 650 $ - 850 $</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterProducts;