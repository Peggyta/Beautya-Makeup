import React from 'react';
import Link from 'next/link';
//vectors
import Circle from '../../vectors/Circle';
import Face from '../../vectors/Face';
import LeafFour from '../../vectors/LeafFour';
import LeafThree from '../../vectors/LeafThree';
import LeafTwo from '../../vectors/LeafTwo';
import LeafOne from '../../vectors/LeafOne';


const FooterSecTwo = () => {
    return (
        <div className='w-full bg-mulberry relative'>
            <div className='absolute right-0 bottom-0 z-10'>
                <div className='relative top-24'>
                    <Face />
                    <div className='absolute -top-12 right-0'>
                        <Circle />
                        <div className='absolute -top-18 left-30'>
                            <LeafFour />              
                        </div>
                        <div className='absolute -top-34 left-19'>
                            <LeafThree />              
                        </div>
                        <div className='absolute -top-1 -left-10 '>
                            <LeafTwo />                  
                        </div>
                        <div className='absolute -top-18 -left-4'>
                            <LeafOne />               
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='flex lg:flex-row flex-col px-8 md:px-10 lg:px-16 mx-auto 
            py-12 justify-between text-white gap-6 max-w-600 md:max-w-none'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-2xl mb-1 lg:mb-3'>How can we Help?</h3>
                    <Link href='/'>beautya branches</Link>
                    <Link href='/'>Contact Us</Link>
                    <Link href='/'>FAQ</Link>
                    <Link href='/'>Our Brand</Link>
                    <Link href='/'>Blog</Link>
                </div>
                <div className='flex flex-col gap-3 mt-3 lg:mt-0'>
                    <h3 className='font-bold text-2xl mb-1 lg:mb-3'>Products</h3>
                    <Link href='/'>Women Make up</Link>
                    <Link href='/'>Women Skincare</Link>
                    <Link href='/'>Gifts & Sets</Link>
                </div>
                <div className='flex flex-col relative z-10 gap-6 max-w-max mt-3 lg:mt-0'>
                    <div>
                        <h3 className='font-bold text-2xl mb-3 lg:mb-6'>
                        keep in touch with beautya
                        </h3>
                        <p>
                            Join the Beautya newsletter and be first to hear about news, 
                            offers and
                            <br/> skincare advice
                        </p>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-3 md:max-w-600 lg:max-w-750 z-20'>
                        <div className='row-start-1 col-span-2 h-16'>
                            <input className='w-11/12 py-3 pl-2 bg-transparent focus:outline-none hover:outline border-b' placeholder='Email Address' type='email' />
                        </div>  
                        <div className='md:row-start-1 row-start-3 col-span-2 mt-0'>
                            <button className='border md:w-28 w-full py-3'>Subscribe</button>
                        </div>  
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] md:-mt-3 lg:pt-1  row-start-2  col-span-2 md:col-start-1 col-end-3">
                            <input
                                className="footer-check-box -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] 
                                checked:border-primary checked:bg-primary before:h-[0.875rem] before:w-[0.875rem] focus:after:h-[0.875rem] focus:after:w-[0.875rem] 
                                before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]  
                                checked:after:ml-[0.25rem] checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:border-[0.125rem] checked:after:content-[''] 
                                hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:opacity-[0.12] 
                                focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:block  
                                focus:after:rounded-[0.125rem] focus:after:content-['']  checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] focus:after:absolute focus:after:z-[1] 
                                checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem]  checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]   
                                dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] 
                                dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="checkboxDefault" />
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer hidden md:block"
                                htmlFor="checkboxDefault">
                                By submitting your email, you agree to receive advertising emails from Beautya.
                                <br />
                                Please review our Privacy Policy, which includes our Financial Incentive 
                                Notice for CA residents.
                            </label>
                            <label className='block md:hidden' htmlFor="checkboxDefault">
                                I agree to Beautya`s Terms and Conditions and Privacy and Policy.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSecTwo;