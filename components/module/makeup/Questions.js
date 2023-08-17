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
        <div className='px-10 mx-auto w-max-8xl bg-white text-raven text-sm pt-8 cursor-pointer'>
            <h2 className='font-bold text-xl text-center mb-6'>Prestige lA Micro-Huile Serum Frequently Asked Questions</h2>
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionOne(!questionOne)}>
                <button className={questionOne ? 'text-lily py-2': 'text-raven'}>
                    What is the best way to use this product?
                </button>
                <span className='sm:text-2xl text-lg transition'>
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
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionTwo(!questionTwo)}>
                <button className={questionTwo ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used on all skin types?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionTwo ? <Minus /> : '+'}
                </span>
            </div>
            {questionTwo && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition.
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionThree(!questionThree)}>
                <button className={questionThree ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used on all skin types?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionThree ? <Minus /> : '+'}
                </span>
            </div>
            {questionThree && (
                <p className='text-justify pb-2 text-lg'>
                     Apply a small amount 
                     of the product to the inside of your elbow and wait 24 hours to make 
                     sure you do not have an allergic reaction or irritation. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionFour(!questionFour)}>
                <button className={questionFour ? 'text-lily py-2': 'text-raven'}>
                    How often should I use this product?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionFour ? <Minus /> : '+'}
                </span>
            </div>
            {questionFour && (
                <p className='text-justify pb-2 text-lg'>
                     Our product is suitable for most skin types, including normal, 
                     oily, dry, and combination skin. However, if you have sensitive
                     skin or a skin condition, we recommend performing a patch test 
                     before using the product all over your face. If you 
                     experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg font-bold gap-2 mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionFive(!questionFive)}>
                <button className={questionFive ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used during pregnancy?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionFive ? <Minus /> : '+'}
                </span>
            </div>
            {questionFive && (
                <p className='text-justify pb-2 text-lg'>
                    If you 
                    experience any discomfort, discontinue use of the product immediately.
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg font-bold gap-2 mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionSix(!questionSix)}>
                <button className={questionSix ? 'text-lily py-2': 'text-raven'}>
                    How often should I use this product?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionSix ? <Minus /> : '+'}
                </span>
            </div>
            {questionSix && (
                <p className='text-justify pb-2 text-lg'>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                     penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                     Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                     Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
                     aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionSeven(!questionSeven)}>
                <button className={questionSeven ? 'text-lily py-2': 'text-raven'}>
                    How should I store this product?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionSeven ? <Minus /> : '+'}
                </span>
            </div>
            {questionSeven && (
                <p className='text-justify pb-2 text-lg'>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
                    sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus 
                    pulvinar, hendrerit id, lorem.
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionEight(!questionEight)}>
                <button className={questionEight ? 'text-lily py-2': 'text-raven'}>
                    How long will it take to see results from using this product?
                </button>
                <span className='sm:text-2xl text-lg transition'>
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
                     sure you do not have an allergic reaction or irritation.
                </p>
            )}
            <div className='flex justify-between items-center md:text-lg gap-2 font-bold mb-2 mt-1 pb-1 pt-3 border-t border-ash' 
                onClick={()=> setQustionNine(!questionNine)}>
                <button className={questionNine ? 'text-lily py-2': 'text-raven'}>
                    Can this product be used in conjunction with other skincare products?
                </button>
                <span className='sm:text-2xl text-lg transition'>
                    {questionNine ? <Minus /> : '+'}
                </span>
            </div>
            {questionNine && (
                <p className='text-justify pb-2 text-lg'>
                    Donec vitae sapien ut libero venenatis faucibus. 
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                    Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis 
                    magna. 
                </p>
            )}
            <div className='border-b border-ash'></div>
        </div>
    );
};

export default Questions;