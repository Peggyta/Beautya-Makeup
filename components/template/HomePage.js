import React from 'react';
import MainCarousel from '../module/homepage/MainCarousel';
import Categories from '../module/homepage/Categories';
import SkinCare from '../module/homepage/SkinCare';
import BestSeller from '../module/homepage/BestSeller';
import NewIn from '../module/homepage/NewIn';
import OurBlogs from '../module/homepage/OurBlogs';
import Offer from '../module/homepage/Offer';

const HomePage = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <MainCarousel />
            <Categories />
            <SkinCare />
            <BestSeller />
            <NewIn />
            <Offer />
            <OurBlogs />
        </div>
    );
};

export default HomePage;