import React from 'react';
import Link from 'next/link';

const ProductDescription = (props) => {
    const{  
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
        <div className='w-max-8xl mx-auto px-10 font-xl my-6'>
            <div className='flex text-cement font-bold justify-between border-b border-cement pb-1'>
                <Link href='#first-section'>Product Details</Link>
                <Link href='#second-section'>How To Apply</Link>
                <Link href='#third-section' scroll={true}>Ingredient</Link>
                <Link href='#forth-section'>What Makes It Advance</Link>
                <Link href='#fifth-section'>Product Specification</Link>
            </div>
            <div>
                <div id='first-section'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>Product Details</h3>
                    <p>{details[0]}</p>
                    <p className='py-6'>{details[1]}</p>
                    <p className='pb-6'>{details[2]}</p>
                    <p>{details[3]}</p>
                    <p>{details[4]}</p>
                    <p>{details[5]}</p>
                    <p>{details[6]}</p>
                    <p>{details[7]}</p>
                </div>
                <div id='second-section'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>How To Apply</h3>
                    <p>{usage[0]}</p>
                    <p>{usage[1]}</p>
                    <p>{usage[2]}</p>
                </div>
                <div id='third-section'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>Ingredient</h3>
                    <p>{ingredient}</p>
                </div>
                <div id='forth-section'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>What Makes It Advance</h3>
                    <p>{more[0]}</p>
                    <p>{more[1]}</p>
                    <p>{more[2]}</p>
                    <p>{more[3]}</p>
                </div>
                <div id='fifth-section'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>Product Specification</h3>
                    <p>{specification[0]}</p>
                    <p>{specification[1]}</p>
                    <p>{specification[2]}</p>
                    <p>{specification[3]}</p>
                    <p>{specification[4]}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;