import React from 'react';
import Link from 'next/link';
//icons
import Gift from '../icons/Gift';
import SecondGift from '../icons/SecondGift';
import ThirdGift from '../icons/ThirdGift';
import ProductLocation from '../icons/ProductLocation';
//function
import { shortenTitle, shortenDescription } from '@/helper/function';

const ProductDetail = (props) => {
    console.log(props);
    const{
            price, 
            slug, 
            description, 
            details, 
            feature, 
            features, 
            more, 
            title, 
            usage,
            specification,
            ingredient
        } = props;
    return (
        <div className='w-max-8xl mx-auto'>
            <div className='flex sm:gap-2 gap-1 font-semibold sm:text-sm text-xs pt-6 md:px-12 pb-4 md:mt-0 mt-6 px-4'>
                <Link className='text-cement' href='/'>Home / </Link>
                <Link className='text-cement' href='/women-makeup'>Women Makeup / </Link>
                <Link className='text-raven' href={`/women-makeup/${slug}`}>{title.length>9 ? shortenTitle(title) : title}</Link>
            </div>
            <div className='flex flex-col gap-3 lg:gap-0 md:flex-row px-4 lg:px-0 
            justify-evenly md:h-550'>
                <div className='lg:w-604 md:w-392 w-full bg-sky'>
                    <img className='w-full h-full object-contain' alt='product' src={`/images/${slug}.jpg`} />
                </div>
                <div className='md:w-96 h-full'>
                    <h2 className='font-bold text-lily text-2.5xl lg:pb-6 pb-3'>{title.length>9 ? shortenTitle(title) : title}</h2>
                    <p className='text-raven font-bold'>{shortenDescription(description)}</p>
                    <div className='flex lg:flex-row flex-col text-cement lg:font-sm font-xs my-1'>
                        <p>{features[0]}<span className='px-1'>|</span></p> 
                        <p>{features[1]}<span className='px-1'>|</span></p> 
                        <p>{features[2]}</p> 
                    </div>
                    <p className='font-bold text-raven'>{feature}</p>
                    <div className='lg:pt-3 md:pt-2 pt-0'>
                        <p className='font-bold text-raven lg:pb-4 md:pb-3 text-2xl'> {price ? `${price} $`  : null}</p>
                        <div className={price ? 'block': 'hidden'}>
                            <select className=' w-full py-4 border-b text-cement border-ash'>
                                <option>30ml $</option>
                            </select>
                            <div className='bg-lily flex lg:my-4 my-3 items-center relative hover:bg-neon transition'>
                                <div className='absolute lg:left-12 left-6'><ProductLocation /></div>
                                <button className='text-white py-4 lg:text-lg w-full'>Check in branches stock</button>
                            </div>
                            <div className='bg-rose text-lily lg:py-6 sm:pt-2 sm:pb-3 mb-2 pl-4 pr-3 text-sm'>
                                <div className='flex gap-2 pt-4 pb-3 '>
                                    <Gift/>
                                    <p>Receive 2 free samples when you spend $100</p>
                                </div>
                                <div className='flex gap-2 py-3 '>
                                    <SecondGift />
                                    <p>receive $2 when you return 5 empty containers</p>
                                </div>
                                <div className='flex gap-2 py-3 '>
                                    <ThirdGift />
                                    <p>Receive free 1-2-1 expert advice in branches</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;