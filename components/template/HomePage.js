import React from 'react';
import MainCarousel from '../module/homepage/MainCarousel';
import Categories from '../module/homepage/Categories';
import SkinCare from '../module/homepage/SkinCare';

const HomePage = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <MainCarousel />
            <Categories />
            <SkinCare />
        </div>
    );
};

export default HomePage;