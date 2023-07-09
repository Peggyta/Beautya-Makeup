import React, { useState } from 'react';
import Link from 'next/link';
//icons
import Search from '../icons/Search';
import Logo from '../icons/Logo';
import Hamburger from '../icons/Hamburger';
import Language from '../icons/Language';
import Cancel from '../icons/Cancel';
import styles from '../../styles/general.module.css';


const MobileLayout = () => {
    const[showMenu, setShowMenu] = useState(false);
    return (
        <>
        <div className='w-full flex items-end justify-between px-4 pt-4 relative'>
            <div onClick={()=> setShowMenu(!showMenu) } className='flex gap-3'>
                <button onClick={()=> setShowMenu(!showMenu)}>
                    <Hamburger/>     
                </button>
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
        <div onClick={() => setShowMenu(!showMenu)} 
        className={showMenu ?
         'top-0 transition ease-in transition-all p-8 font-bold absolute bg-gray-200 w-full' : 
         'translate-y-0 absolute -top-48'}>
            <div className='absolute right-10'>
                {showMenu ? <Cancel /> : <Hamburger/>}  
            </div>   
            <div className='flex flex-col items-center gap-3 mt-6'>
                <Link href='/'>Women Make UP</Link> 
                <Link href='/'>Women Skincare</Link>
                <Link href='/'>Gifts & Sets</Link>
                <Link href='/'>Branches</Link> 
                <Link href='/'>Our Brand</Link> 
            </div>            
        </div>
        </>
    );
};

export default MobileLayout;