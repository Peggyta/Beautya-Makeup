import React, {useState} from 'react';
//icons
import Bchat from '@/components/icons/Bchat';
import Bwrite from '@/components/icons/Bwrite';
import Bcall from '@/components/icons/Bcall';
import Msg from '@/components/icons/Msg';
import ArrowRight from '@/components/icons/ArrowRight';
import Minus from '@/components/icons/Minus';
import Plus from '@/components/icons/Plus';

const MobileContactUs = () => {
    const MAX_TEXT_LENGTH = 360;
    const[text, setText] = useState("");
    const[isWrite, setIsWrite] = useState(false);
    const[isChat, setIsChat] = useState(false);
    const[isMsg, setIsMsg] = useState(false);
    const[isCall, setIsCall] = useState(false);
    const[branches, setBranches] = useState(false);
    const[stock, setStock] = useState(false);
    const[refund, setRefund] = useState(false);
    const[skinType, setSkinType] = useState(false);
    const[offer, setOffer] = useState(false);

    function textLimiter (event) {
        const value = event.target.value;
        if(value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }

    return (
        <div className='md:hidden flex flex-col mt-10 bg-white text-raven border-t
         border-b border-ash px-4'>
            <div className='flex justify-between py-7' onClick={()=> setIsWrite(!isWrite)}> 
                <div className='flex gap-2 items-center font-semibold text-sm'>
                    <Bwrite />
                    <button>Write Us</button>
                </div>
                <div className='stroke-black'>
                    {isWrite ? <Minus /> : <ArrowRight />}
                </div>
            </div>
            {isWrite && (
                    <div>
                        <div className='flex flex-col gap-2 text-lightblue'>   
                            <select className='input-mobile-styles'>
                                <option>Title</option>
                            </select>
                            <input className='input-mobile-styles' placeholder='First Name' type='text' />
                            <select className='input-mobile-styles'>
                                <option>Country/Region</option>
                            </select>
                            <input className='input-mobile-styles' placeholder='Email Address' type='text' />
                            <input className='input-mobile-styles' placeholder='Last Name' type='text' />
                            <select className='input-mobile-styles'>
                                <option>Language</option>
                            </select>
                            <input className='py-6 pl-3' placeholder='Phone Number' type='text' />
                        </div>
                        <div className='mt-3'>
                <p className='text-sm text-cement'>Subject</p>
                <div className='text-sm grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 '>
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
                        onChange={textLimiter}
                        value={text}
                        className=' w-full h-full pl-4 text-xl' 
                        placeholder='Your Text'>
                        </textarea> 
                    </div>
                    <div className='flex justify-end text-sm text-cement pt-0.5'>
                        {`${text.length} / ${MAX_TEXT_LENGTH}`}
                    </div>
                    <div className='flex items-center gap-2 mt-3 mb-6 '>
                        <input className='accent-lily' type='checkbox' />
                        <label className='text-sm'>I have read and understood the contact us privacy and policy.</label>
                    </div>
                    <div className='mb-8'>
                        <button className='text-lily opacity-50 w-full border border-lily px-8 py-4'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
                )}
                <div className='flex justify-between py-7 border-t border-ash'
                onClick={() => setIsChat(!isChat)}>
                    <div className='flex gap-2 items-center font-semibold text-sm'>
                        <Bchat />
                        <button>Chat Online</button>
                    </div>
                    <div className='stroke-black'>
                        {isChat ? <Minus /> : <Plus />}
                    </div>
                </div>
                {isChat && (
                    <div>
                        <p className='font-bold'>Looking For Personalized Advice?</p>
                        <p className='text-xs text-cement mt-2 mb-4'>The option to chat becomes active when one of our 
                            Client Advisors is available.</p>
                        <button className='text-lily py-1 border border-lily w-full py-4'>Ask Your Question</button>
                    </div>
                )}
            <div className='flex justify-between py-7 border-t border-ash'
            onClick={() => setIsCall(!isCall)}>
                <div className='flex gap-2 items-center font-semibold text-sm'>
                    <Bcall />
                    <button>Call Us</button>
                </div>
                <div className='stroke-black'>
                    {isCall ? <Minus /> : <Plus />}
                </div>
            </div>
            {isCall && (
                    <div>
                        <p className='font-bold'>Our Client Advisors would be delighted to assist you. </p>
                        <p className='font-bold'>You may contact us at <span className='text-lily'>1-802-526-2463</span></p>
                        <p className='text-xs text-cement mt-2 mb-4'>Service available from Monday
                        to Friday from 10 am to 8 pm and Saturday from 10 am to 6 pm</p>  
                    </div>
                )}
            <div className='flex justify-between py-7 border-t border-ash'
                onClick={() => setIsMsg(!isMsg)}>
                <div className='flex gap-2 items-center font-semibold text-sm'>
                    <Msg />
                    <button>Instant Message</button>
                </div>
                <div className='stroke-black'>
                    {isMsg ? <Minus /> : <Plus />}
                </div>
            </div>
            {isMsg && (
                <div>
                    <p className='font-bold'>Would you like to contact us on an instant messaging app?</p>
                    <p className='text-xs text-cement mt-2 mb-4'>Our Client Advisors will
                    be delighted to assist you</p>
                    <button className='text-lily py-1 border border-lily w-full py-4'>Ask Your Question</button>
                </div>
            )}
        </div>
    );
};

export default MobileContactUs;