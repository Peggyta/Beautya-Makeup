import React from 'react';
//icons
import Gift from '../icons/Gift';
import SecondGift from '../icons/SecondGift';
import ThirdGift from '../icons/thirdGift';
import ProductLocation from '../icons/ProductLocation';

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
            <div className='flex justify-evenly'>
                <div>
                    <img className='w-704 h-605 object-cover' alt='product' src={`/images/${slug}.jpg`} />
                </div>
                <div className='w-1/4'>
                    <h2 className='font-bold text-lily text-3xl pb-6'>{title}</h2>
                    <p className='text-raven font-bold'>{description}</p>
                    <div className='flex text-cement font-sm my-2'>
                        <p>{features[0]}<span className='px-1'>|</span></p> 
                        <p>{features[1]}<span className='px-1'>|</span></p> 
                        <p>{features[2]}</p> 
                    </div>
                    <p className='font-bold text-raven'>{feature}</p>
                    <div className='pt-3'>
                        <p className='font-bold text-raven pb-4 text-2xl'>$ {price}</p>
                        <div>
                            <select className=' w-full py-2 border-b text-cement border-ash'>
                                <option>30ml ${price}</option>
                            </select>
                            <div className='bg-lily flex my-6 items-center justify-center py-2'>
                                <ProductLocation />
                                <button className='text-white'>Check in branches stock</button>
                            </div>
                            <div className='bg-rose text-lily mb-2 py-10 pl-4 pr-3 text-sm'>
                                <div className='flex gap-2'>
                                    <Gift/>
                                    <p>Receive 2 free samples when you spend $100</p>
                                </div>
                                <div className='flex gap-2'>
                                    <SecondGift />
                                    <p>receive $2 when you return 5 empty containers</p>
                                </div>
                                <div className='flex gap-2'>
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