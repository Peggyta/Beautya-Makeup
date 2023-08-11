import React from 'react';
import Link from 'next/link';

const ProductCard = (props) => {
    const{title, price, description, slug} = props;
    return (
        <div className='sm:w-72 w-56 flex flex-col justify-between border mx-auto border-ash text-raven bg-white'>
            <Link href={`/women-makeup/${slug}`}>
                <div>
                    <img className='w-full h-80 object-cover' src={`/images/${slug}.jpg`} alt='product' />
                    <h3 className='text-lily font-bold pt-3 pb-2 px-2'>{title}</h3>
                    <p className='text-sm px-2'>{description}</p>
                </div>
                <div className='pl-2 pb-2'>
                    <p className= {price>0 ? 'text-lg': 'hidden'}>$ {price}</p>
                </div>  
            </Link>     
        </div>
    );
};

export default ProductCard;