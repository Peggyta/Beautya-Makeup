import React from 'react';
import Link from 'next/link';
import MobileLayout from './MobileLayout';
import FooterSecOne from '../module/FooterSecOne';
import FooterSecTwo from '../module/FooterSecTwo';
import FooterSecThree from '../module/FooterSecThree';
import FooterSecFour from '../module/FooterSecFour';
//icons
import Logo from '../icons/Logo';
import Search from '../icons/Search';
import Language from '../icons/Language';
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
                    <Link   href='/'>Women Make UP</Link>
                    <Link   href='/'>Women Skincare</Link>
                    <Link   href='/'>Gifts & Sets</Link>
                    <Link   href='/'>Branches</Link>
                    <Link href='/'>Our Brand</Link>
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
            <div className='min-h-screen w-full'>{children}</div>
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