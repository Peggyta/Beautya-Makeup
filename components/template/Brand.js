import React from 'react';
import BrandBanner from '../module/brand/BrandBanner';
import AboutBrand from '../module/brand/AboutBrand';
import Inclusion from '../module/brand/Inclusion';
import GlobalBranches from '../module/brand/GlobalBranches';

const Brand = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <BrandBanner />
            <AboutBrand />
            <Inclusion />
            <GlobalBranches />
        </div>
    );
};

export default Brand;