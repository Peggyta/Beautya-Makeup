import React from 'react';
import Link from 'next/link';
import MobileLayout from './MobileLayout';
import FooterSecOne from '../module/footer/FooterSecOne';
import FooterSecTwo from '../module/footer/FooterSecTwo';
import FooterSecThree from '../module/footer/FooterSecThree';
import FooterSecFour from '../module/footer/FooterSecFour';
//icons
import Logo from '../../components/icons/Logo';
import Search from '../../components/icons/Search';
import Language from '../../components/icons/Language';
import styles from '../../styles/general.module.css';

const Layout = ({children}) => {
    return (
        <div className='max-w-8xl mx-auto'>
            <div className='md:hidden block'>
                <MobileLayout />
            </div>
            <header className='hidden md:flex justify-between items-end py-6 h-28 w-full lg:px-12 px-6 gap-2'>
                <div className='relative'>
                <div className={styles.logoShadowPC}></div>
                    <Link href='/'>
                        <Logo />
                    </Link> 
                </div>
                <div className='md:flex items-center w-max lg:gap-x-10 gap-x-2 justify-center 
                font-bold text-midnight hidden lg:text-base text-sm'>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/women-makeup'>Women Make UP</Link>
                    <Link href='/branches'>Branches</Link>
                    <Link href='/our-brand'>Our Brand</Link>
                    <Link href='/'>Contact Us</Link>
                </div>
                <div className='hidden md:flex gap-x-2 w-max items-center'>
                    <Search /> 
                    <p className='text-neutral text-2xl'>|</p>
                    <Language /> 
                    <ul>
                        <li>US <span className='text-sm text-cement'>(EN)</span></li>
                    </ul>   
                </div>
            </header>
            <div className='min-h-screen w-full bg-dust'>{children}</div>
            <footer className='w-full'>
                <FooterSecOne />
                <FooterSecTwo />
                <FooterSecThree />
                <FooterSecFour />
            </footer>
        </div>
    );
};

export default Layout;