import React, {useState} from 'react';
//icons
import Minus from '@/components/icons/Minus';

const Questions = () => {
    const[questionOne, setQustionOne] = useState(false);
    const[questionTwo, setQustionTwo] = useState(false);
    const[questionThree, setQustionThree] = useState(false);
    const[questionFour, setQustionFour] = useState(false);
    const[questionFive, setQustionFive] = useState(false);
    const[questionSix, setQustionSix] = useState(false);
    const[questionSeven, setQustionSeven] = useState(false);
    const[questionEight, setQustionEight] = useState(false);
    const[questionNine, setQustionNine] = useState(false);

    return (
        <div className='px-10 mx-auto w-max-8xl text-raven text-sm mt-8 cursor-pointer'>
            <h2 className='font-bold text-xl text-center mb-6'>Prestige lA Micro-Huile Serum Frequently Asked Questions</h2>
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionOne(!questionOne)}>
                <button className={questionOne ? 'text-lily py-2': 'text-raven'}>
                    What is the best way to use this product?
                </button>
                <span className='text-2xl transition'>
                    {questionOne ? <Minus /> : '+'}
                </span>
            </div>
            {questionOne && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionTwo(!questionTwo)}>
                <button className={questionTwo ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used on all skin types?
                </button>
                <span className='text-2xl transition'>
                    {questionTwo ? <Minus /> : '+'}
                </span>
            </div>
            {questionTwo && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionThree(!questionThree)}>
                <button className={questionThree ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used on all skin types?
                </button>
                <span className='text-2xl transition'>
                    {questionThree ? <Minus /> : '+'}
                </span>
            </div>
            {questionThree && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionFour(!questionFour)}>
                <button className={questionFour ? 'text-lily py-2': 'text-raven'}>
                    How often should I use this product?
                </button>
                <span className='text-2xl transition'>
                    {questionFour ? <Minus /> : '+'}
                </span>
            </div>
            {questionFour && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionFive(!questionFive)}>
                <button className={questionFive ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used during pregnancy?
                </button>
                <span className='text-2xl transition'>
                    {questionFive ? <Minus /> : '+'}
                </span>
            </div>
            {questionFive && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionSix(!questionSix)}>
                <button className={questionSix ? 'text-lily py-2': 'text-raven'}>
                    How often should I use this product?
                </button>
                <span className='text-2xl transition'>
                    {questionSix ? <Minus /> : '+'}
                </span>
            </div>
            {questionSix && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionSeven(!questionSeven)}>
                <button className={questionSeven ? 'text-lily py-2': 'text-raven'}>
                    How should I store this product?
                </button>
                <span className='text-2xl transition'>
                    {questionSeven ? <Minus /> : '+'}
                </span>
            </div>
            {questionSeven && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionEight(!questionEight)}>
                <button className={questionEight ? 'text-lily py-2': 'text-raven'}>
                    How long will it take to see results from using this product?
                </button>
                <span className='text-2xl transition'>
                    {questionEight ? <Minus /> : '+'}
                </span>
            </div>
            {questionEight && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center text-lg font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionNine(!questionNine)}>
                <button className={questionNine ? 'text-lily py-2': 'text-raven'}>
                Can this product be used in conjunction with other skincare products?
                </button>
                <span className='text-2xl transition'>
                    {questionNine ? <Minus /> : '+'}
                </span>
            </div>
            {questionNine && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='border-b border-ash'></div>
        </div>
    );
};

export default Questions;