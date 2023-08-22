import React from 'react';
import Link from 'next/link';
import BrandBanner from '../module/brand/BrandBanner';
import AboutBrand from '../module/brand/AboutBrand';
import Inclusion from '../module/brand/Inclusion';
import GlobalBranches from '../module/brand/GlobalBranches';

const Brand = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <div className='flex gap-2 font-semibold text-sm md:px-12 px-4 pt-6 mt-6 md:mt-0 md:pb-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <p className='text-raven'>Our Brand </p>
            </div>
            <BrandBanner />
            <AboutBrand />
            <Inclusion />
            <GlobalBranches />
        </div>
    );
};

export default Brand;