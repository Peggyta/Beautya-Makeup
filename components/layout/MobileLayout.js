import React from 'react';
import Link from 'next/link';
import Search from '../icons/Search';
import Logo from '../icons/Logo';
import Hamburger from '../icons/Hamburger';
import Language from '../icons/Language';
import styles from '../../styles/general.module.css';


const MobileLayout = () => {
    return (
        <div className='w-full flex items-end justify-between px-4 pt-4'>
            <div className='flex gap-3'>
                <Hamburger />
                <Search />
            </div>
            <div className='relative'>
                <div className={styles.logoShadow}></div>
                <Link href='/'>
                    <Logo />
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <Language /> 
                <ul>
                    <li>US <span className='text-sm text-cement'>(EN)</span></li>
                </ul>   
            </div>
        </div>
    );
};

export default MobileLayout;