import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import picOne from '../../../public/images/makeup1.jpg';
import picTwo from '../../../public/images/makeup2.jpg';
import picThree from '../../../public/images/makeup3.jpg';

const Categories = () => {
    
    return (
        <div className='mt-10 text-raven'>
        <h2 className='text-center mb-6 font-bold text-2xl'>Product's Categories</h2>
        <div className='flex gap-6 justify-center text-lg'>
            <Link href='/mascara'>
                <div className='flex flex-col items-center'>
                    <Image src={picThree} width={256} height={342} alt='category' />
                    <p className='py-2'>Eyeliner & Mascara</p>
                </div>
            </Link>
            <Link href='/cream'>
                <div className='flex flex-col items-center'>
                    <Image src={picTwo} width={256} height={342} alt='category' />
                    <p className='py-2'>Moisturizer Creams</p>
                </div>
            </Link>
            <Link href='/serum'>
                <div className='flex flex-col items-center'>
                    <Image src={picOne} width={256} height={342} alt='category' />
                    <p className='py-2'>Serum & Conditioner</p>
                </div>
            </Link>
        </div>
    </div>
    );
};

export default Categories;