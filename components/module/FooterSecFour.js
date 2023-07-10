import React from 'react';
import CopyRight from '../icons/CopyRight';

const FooterSecFour = () => {
    return (
        <div className='w-full bg-rasin h-85 md:h-fit text-xs'>
            <div className=' max-w-640 md:max-w-none text-ash flex md:flex-row flex-col justify-between py-3 lg:px-16 md:px-6 mx-auto pl-6'>
                <div className='flex gap-2 items-center'>
                    <CopyRight />
                    <p>2023 Beautya. All Rights Reserved.</p>
                </div>
                <div className='flex gap-6 mt-3 md:mt-0 items-center'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div> 
            </div>
        </div>  
    );
};

export default FooterSecFour;