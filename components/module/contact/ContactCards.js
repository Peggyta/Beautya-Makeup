import React from 'react';
//icons
import Chat from '@/components/icons/Chat';
import PhoneCall from '@/components/icons/PhoneCall';
import Message from '@/components/icons/Message';

const ContactCards = () => {
    return (
        <div className='text-raven flex gap-6 justify-between mt-8 pb-8'>
            <div className='border border-ash bg-white px-3 flex flex-col justify-between pb-4 w-96'>
                <div className='flex items-center gap-2'>
                    <Chat />
                    <h3 className='text-lily font-bold lg:text-2xl text-xl mt-6 mb-4'>CHAT ONLINE</h3>
                </div>
                <p className='font-bold'>Looking For Personalized Advice?</p>
                <p className='text-xs text-cement mt-2 mb-4'>The option to chat becomes active when one of our 
                    Client Advisors is available.</p>
                <button className='text-lily py-1 border border-lily w-full py-2'>Ask Your Question</button>
            </div>
            <div className='border border-ash px-3 w-96 bg-white flex flex-col justify-between pb-4'>
                <div className='flex items-center gap-2'>
                    <PhoneCall />
                    <h3 className='text-lily font-bold lg:text-2xl text-xl mt-6 mb-4'>CALL US</h3>
                </div>
                <p className='font-bold'>Our Client Advisors would be delighted to assist you. </p>
                <p className='font-bold'>You may contact us at <span className='text-lily'>1-802-526-2463</span></p>
                <p className='text-xs text-cement mt-2 mb-4'>Service available from Monday
                 to Friday from 10 am to 8 pm and Saturday from 10 am to 6 pm</p>  
            </div>
            <div className='border border-ash px-3 w-96 bg-white flex flex-col justify-between pb-4'>
                <div className='flex items-center gap-2'>
                    <Message />
                    <h3 className='text-lily font-bold lg:text-2xl text-xl mt-6 mb-4'>INSTANT MESSAGE</h3>
                </div>
                <p className='font-bold'>Would you like to contact us on an instant messaging app?</p>
                <p className='text-xs text-cement mt-2 mb-4'>Our Client Advisors will
                 be delighted to assist you</p>
                <button className='text-lily py-1 border border-lily w-full py-2'>Ask Your Question</button>
            </div>
        </div>
    );
};

export default ContactCards;