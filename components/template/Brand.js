import React from 'react';
import BrandBanner from '../module/brand/BrandBanner';
import AboutBrand from '../module/brand/AboutBrand';
import GlobalBranches from '../module/brand/GlobalBranches';

const Brand = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <BrandBanner />
            <AboutBrand />
            <GlobalBranches />
        </div>
    );
};

export default Brand;