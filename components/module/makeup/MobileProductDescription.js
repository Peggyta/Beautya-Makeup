import React, {useState} from 'react';
    //icons
    import Minus from '@/components/icons/Minus';
    //functions
    import { boldSteps, usageWithoutSteps } from '@/helper/function';

const MobileProductDescription = (props) => {
    const[moreDetails, setMoreDetails] = useState(false);
    const[isText, setIsText] = useState(false);
    const[isSpecification, setIsSpecification] = useState(false);
    const[isIngredient, setIsIngredient] = useState(false);
    const[isApply, setIsApply] = useState(false);

    const{  
        details, 
        more, 
        usage,
        specification,
        ingredient
    } = props;

    return (
        <div className='md:hidden block px-4 mx-auto w-max-8xl text-raven text-sm my-6'>
            <div className='flex justify-between items-center font-semibold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
            onClick={()=> setMoreDetails(!moreDetails)}>
                <button className={moreDetails ? 'text-lily py-2': 'text-raven'}>Product Details</button>
                <span className='text-2xl transition'>
                    {moreDetails ? <Minus /> : '+'}
                </span>
            </div>
            {moreDetails && (
                <div className='text-justify pb-2'>
                    <p>{details[0]}</p>
                    <p>{details[1]}</p>
                    <p>{details[2]}</p>
                    <p>{details[3]}</p>
                    <p>{details[4]}</p>
                    <p>{details[5]}</p>
                    <p>{details[6]}</p>
                    <p>{details[7]}</p>
                </div>
            )}
            <div className='flex justify-between items-center font-semibold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
            onClick={()=> setIsApply(!isApply)}>
                <button className={isApply ? 'text-lily py-2': 'text-raven'}>How To Apply</button>
                <span className='text-2xl transition'>
                    {isApply ? <Minus /> : '+'}
                </span>
            </div>
            {isApply && (
                <div className='pb-2'>
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
            )}
            <div className='flex justify-between items-center font-semibold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
            onClick={()=> setIsIngredient(!isIngredient)}>
                <button className={isIngredient ? 'text-lily py-2': 'text-raven'}>Ingredient</button>
                <span className='text-2xl transition'>
                    {isIngredient ? <Minus /> : '+'}
                </span>
            </div>
            {isIngredient && (
                <p className='text-justify pb-2'>{ingredient}</p>
            )}
            <div className='flex justify-between items-center font-semibold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
            onClick={()=> setIsText(!isText)}>
                <button className={isText ? 'text-lily py-2': 'text-raven'}>What Makes It Advance</button>
                <span className='text-2xl transition'>
                    {isText ? <Minus /> : '+'}
                </span>
            </div>
            {isText && (
                <div className='pb-2 text-justify'>
                    <p>{more[0]}</p>
                    <p>{more[1]}</p>
                    <p>{more[2]}</p>
                    <p>{more[3]}</p>
                </div>
            )}
            <div className='flex justify-between items-center font-semibold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
            onClick={()=> setIsSpecification(!isSpecification)}>
                <button className={isSpecification ? 'text-lily py-2': 'text-raven'}>Product Specification</button>
                <span className='text-2xl transition'>
                    {isSpecification ? <Minus /> : '+'}
                </span>
            </div>
            {isSpecification && (
                <div>
                    <p>{specification[2]}</p>
                    <p>{specification[3]}</p>
                    <p>{specification[4]}</p>
                </div>
            )}
        </div>
    );
};

export default MobileProductDescription;