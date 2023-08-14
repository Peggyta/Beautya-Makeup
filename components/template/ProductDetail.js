import React from 'react';
import Link from 'next/link';
//function
import { shortenTitle } from '@/helper/function';
//modules
import ProductIntroduction from '../module/makeup/ProductIntroduction';
import ProductDescription from '../module/makeup/ProductDescription';

const ProductDetail = (props) => {
    console.log(props);
    const{
            price, 
            slug, 
            description, 
            details, 
            feature, 
            features, 
            more, 
            title, 
            usage,
            specification,
            ingredient
        } = props;
    return (
        <div className='w-max-8xl mx-auto'>
            <div className='flex sm:gap-2 gap-1 font-semibold sm:text-sm text-xs pt-6 md:px-12 pb-4 md:mt-0 mt-6 px-4'>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-cement' href='/women-makeup'>Women Makeup / </Link>
                <Link className='text-raven' href={`/women-makeup/${slug}`}>{title.length>9 ? shortenTitle(title) : title}</Link>
            </div>
            <ProductIntroduction {...props} />
            <ProductDescription {...props} />
            
        </div>
    );
};

export default ProductDetail;