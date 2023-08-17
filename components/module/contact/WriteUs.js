import React from 'react';
//icon
import Pocket from '@/components/icons/Pocket';

const WriteUs = () => {
    return (
        <div className='flex flex-col bg-white border border-ash py-4 text-raven mt-10'>
            <div className='mx-auto max-w-1016 w-full'>
                <div className='flex gap-1 items-center mb-10'>
                    <Pocket />
                    <h3 className='font-bold text-2xl text-lily'>Write Us</h3>
                </div>
                <h3 className='text-xl font-bold'>Your information</h3>
                <div className='flex gap-6 text-lightblue mt-3 '>
                    <div className='flex flex-col gap-2 w-464'>
                        <select className='input-styles'>
                            <option>Title</option>
                        </select>
                        <input className='input-styles' placeholder='First Name' type='text' />
                        <select className='input-styles'>
                            <option>Country/Region</option>
                        </select>
                        <input className='input-styles' placeholder='Email Address' type='text' />
                    </div>
                    <div className='flex flex-col gap-2 w-464 justify-end'>
                        <input className='input-styles' placeholder='Last Name' type='text' />
                        <select className='input-styles'>
                            <option>Language</option>
                        </select>
                        <input className='input-styles' placeholder='Phone Number' type='text' />
                    </div>
                </div>
                <div className='border-b mb-8 mt-10'></div>
            </div>
            <div className='mx-auto max-w-1016 w-full'>
            <h3 className='font-bold text-xl'>Your Request</h3>
            <div className='mt-3'>
                <p className='text-xl text-cement'>Subject</p>
                <div className='text-sm flex items-center gap-3 mt-2 '>
                    <button className='req-btn-styles'>Branches</button>
                    <button className='req-btn-styles'>Skin Type</button>
                    <button className='req-btn-styles'>Special Offer And Promotion</button>
                    <button className='req-btn-styles'>Returns And Refunds</button>
                    <button className='req-btn-styles'>Product And Stock</button>
                </div>
                <div className='border-b border-ash h-28 mt-4 '>
                        <input className=' w-full h-full pl-4 text-xl' placeholder='Your Text' /> 
                    </div>
                    <div className='flex items-center gap-2 mt-3 mb-6 '>
                        <input type='checkbox' />
                        <label className='text-sm'>I have read and understood the contact us privacy and policy.</label>
                    </div>
                    <div className='flex justify-end'>
                        <button className='text-lily opacity-50 border border-lily px-8 py-1'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteUs;