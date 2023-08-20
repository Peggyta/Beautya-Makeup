import React from 'react';
import MainCarousel from '../module/homepage/MainCarousel';
import Categories from '../module/homepage/Categories';

const HomePage = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <MainCarousel />
            <Categories />
        </div>
    );
};

export default HomePage;