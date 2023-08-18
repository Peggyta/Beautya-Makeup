import React, {useState} from 'react';
//icon
import Pocket from '@/components/icons/Pocket';

const WriteUs = () => {
    const MAX_TEXT_LENGTH = 360;
    const[text, setText] = useState("");
    const[branches, setBranches] = useState(false);
    const[stock, setStock] = useState(false);
    const[refund, setRefund] = useState(false);
    const[skinType, setSkinType] = useState(false);
    const[offer, setOffer] = useState(false);

    function textLimiter(event) {
        const value = event.target.value;
        if(value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }

    return (
        <div className='flex flex-col bg-white border px-4 border-ash py-5 text-raven mt-10'>
            <div className='mx-auto max-w-1016 w-full '>
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
                <div className='text-sm grid grid-cols-2 lg:grid-cols-5 gap-3 mt-2 '>
                    <button 
                    onClick={()=>setBranches(!branches)} 
                    className={branches ? 'clicked-req-btn': 'req-btn-styles'}>
                        Branches
                    </button>
                    <button 
                     onClick={()=>setSkinType(!skinType)} 
                     className={skinType ? 'clicked-req-btn': 'req-btn-styles'}>
                        Skin Type
                    </button>
                    <button 
                    onClick={()=>setOffer(!offer)} 
                    className={offer ? 'clicked-req-btn': 'req-btn-styles'}>
                        Special Offer And Promotion
                    </button>
                    <button
                     onClick={()=>setRefund(!refund)} 
                     className={refund ? 'clicked-req-btn': 'req-btn-styles'}>
                        Returns And Refunds
                    </button>
                    <button  
                    onClick={()=>setStock(!stock)} 
                    className={stock ? 'clicked-req-btn': 'req-btn-styles'}>
                        Product And Stock
                    </button>
                </div>
                <div className='border-b border-ash h-28 mt-4 '>
                    <textarea
                        value={text}
                        onChange={textLimiter}
                        className=' w-full h-full pl-4 text-xl' placeholder='Your Text'
                    >     
                    </textarea>         
                    </div>
                    <div className='flex justify-end text-sm text-cement pt-0.5'>
                        {`${text.length} / ${MAX_TEXT_LENGTH}`}
                    </div>
                    <div className='flex items-center gap-2 mt-3 mb-6 '>
                        <input className='accent-lily' type='checkbox' />
                        <label className='text-sm pt-0.5'>I have read and understood the contact us privacy and policy.</label>
                    </div>
                    <div className='flex justify-end'>
                        <button className='text-lily opacity-50 border border-lily px-12 py-3'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteUs;