import React, {useState} from 'react';
import Toggle from './Toggle';
import ArrowDown from '@/components/icons/ArrowDown';
import ArrowUp from '@/components/icons/ArrowUp';

const FilterProducts = () => {
    const[categoryOpen, setCategoryOpen] = useState(false);
    const[skinOpen, setSkinOpen] = useState(false);
    const[featuredOpen, setFeaturedOpen] = useState(false);
    const[priceOpen, setPriceOpen] = useState(false);

    return (
        <div className='bg-white'>
            <div className='flex border-t border-b border-ash justify-between h-14 items-center px-4 mt-4'>
                <p className='font-bold'>Out Of Stock Items</p>
                <Toggle />
            </div>
            <div className='mt-3 px-4 flex-col flex gap-5'>
                <div>
                    <div className='flex justify-between cursor-pointer' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <p className={categoryOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Category</p>
                        <ArrowDown />    
                    </div>
                    <div className={categoryOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Cleansers</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Exfoliators</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Toners</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Retinols</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Night Cream</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex justify-between cursor-pointer' onClick={() => setSkinOpen(!skinOpen)}>
                        <p className={skinOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Skin Condition</p>
                        <ArrowDown />    
                    </div>
                    <div className={skinOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Dry Skin</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Normal Skin</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Greasy Skin</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex justify-between cursor-pointer' onClick={() => setFeaturedOpen(!featuredOpen)}>
                        <p className={featuredOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Featured</p>
                        <ArrowDown />    
                    </div>
                    <div className={featuredOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Anti-Pollution</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Anti-Aging</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex justify-between cursor-pointer' onClick={() => setPriceOpen(!priceOpen)}>
                        <p className={priceOpen ? 'text-lily font-bold': 'text-raven font-bold'}>Price</p>
                        <ArrowDown />    
                    </div>
                    <div className={priceOpen ? 'my-3': 'hidden'}>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>60 $ - 120 $</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>200 $ - 500 $</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>550 $ - 900 $</p>
                        </div>
                        <div className='flex items-center pt-2 gap-2'>
                            <input type="checkbox" className='accent-lily' />
                            <p className='text-raven font-xl pt-0.5'>Up to 1000 $</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterProducts;