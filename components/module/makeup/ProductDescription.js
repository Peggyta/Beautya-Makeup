import React, {useState} from 'react';
import Link from 'next/link';
//function
import { boldSteps, usageWithoutSteps, showLessIngredient, showIngredient } from '@/helper/function';

const ProductDescription = (props) => {
    const[moreDetails, setMoreDetails] = useState(false);
    const[moreText, setMoreText] = useState(false);
    const[moreSpecification, setMoreSpecification] = useState(false);
    const[moreIngredient, setMoreIngredient] = useState(false);

    const{  
        details, 
        more, 
        usage,
        specification,
        ingredient
    } = props;

    const clickHandler = () => {
        setMoreDetails(!moreDetails)
    };

    const clickMoreHandler = () => {
        setMoreText(!moreText)
    };

    const specificationHandler = () => {
        setMoreSpecification(!moreSpecification)
    };

    const IngredientHandler = () => {
        setMoreIngredient(!moreIngredient)
    };
    
    return (
        <div className='w-max-8xl mx-auto px-10 font-xl my-6 text-raven'>
            <div className='flex text-cement font-bold justify-between border-b border-cement pb-1'>
                <Link href='#first-section'>Product Details</Link>
                <Link href='#second-section'>How To Apply</Link>
                <Link href='#third-section' scroll={true}>Ingredient</Link>
                <Link href='#forth-section'>What Makes It Advance</Link>
                <Link href='#fifth-section'>Product Specification</Link>
            </div>
            <div className='bg-white'>
                <div id='first-section' className='border-b border-ash pb-3'>
                    <h3 className='font-bold text-lily font-xl pb-3 pt-4'>Product Details</h3>
                    <p>{details[0]}</p>
                    <p className='py-6'>{details[1]}</p>
                    <p className='pb-6'>{details[2]}</p>
                    {moreDetails && (
                    <div>
                        <p>{details[3]}</p>
                        <p>{details[4]}</p>
                        <p>{details[5]}</p>
                        <p>{details[6]}</p>
                        <p>{details[7]}</p>
                    </div>
                    )}
                    <button onClick={clickHandler} className={moreDetails ? 'text-lily font-semibold pl-4 pb-3 pt-4': 'text-lily font-semibold pl-4 pb-4'}>
                        {moreDetails ? 'Read Less <' : 'Read More >'}
                    </button>
                </div>
                <div id='second-section' className='border-b border-ash pb-4'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>How To Apply</h3>
                    <p>
                        <span className='font-bold'>{boldSteps(usage[0])} </span>
                        {usageWithoutSteps(usage[0])}
                    </p>
                    <p>
                    <span className='font-bold'>{boldSteps(usage[1])} </span>
                        {usageWithoutSteps(usage[1])}
                    </p>
                    <p>
                    <span className='font-bold'>{boldSteps(usage[2])} </span>
                        {usageWithoutSteps(usage[2])}
                    </p>
                </div>
                <div id='third-section' className='border-b border-ash pb-4'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>Ingredient</h3>
                    <p>{showLessIngredient(ingredient)}</p>
                    {moreIngredient && (
                        <p>{showIngredient(ingredient)}</p>
                    )}
                    <button onClick={IngredientHandler} className='text-lily font-semibold pl-4 py-4'>
                        {moreIngredient ? 'Read Less <' : 'Read More >'}
                    </button>
                </div>
                <div id='forth-section' className='border-b border-ash pb-4'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>What Makes It Advance</h3>
                    <p>{more[0]}</p>
                    <p>{more[1]}</p>
                    {moreText && (
                        <div>
                            <p>{more[2]}</p>
                            <p>{more[3]}</p>
                        </div>
                    )}
                    <button onClick={clickMoreHandler} className='text-lily font-semibold pl-4 pb-4 pt-4'>
                        {moreText ? 'Read Less <' : 'Read More >'}
                    </button>
                </div>
                <div id='fifth-section' className='border-b border-ash pb-4'>
                    <h3 className='font-bold text-lily font-xl mb-3 mt-4'>Product Specification</h3>
                    <p>{specification[0]}</p>
                    <p>{specification[1]}</p>
                    {moreSpecification && (
                        <div>
                            <p>{specification[2]}</p>
                            <p>{specification[3]}</p>
                            <p>{specification[4]}</p>
                        </div>
                    )}
                    <button onClick={specificationHandler} className='text-lily font-semibold pl-4 pb-4 pt-4'>
                        {moreSpecification ? 'Read Less <' : 'Read More >'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;