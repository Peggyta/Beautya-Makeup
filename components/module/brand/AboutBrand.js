import React from 'react';
import Image from 'next/image';
import ownerPhoto from '../../../public/images/heritage.jpg';

const AboutBrand = () => {
    return (
        <div className='max-w-1016 mx-auto px-12 mt-6 md:mt-16 md:px-6 text-raven'>
            <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
                <div className='md:w-450'>
                    <h3 className='text-2xl font-bold mb-3'>Heritage</h3>
                    <p className='text-lg text-justify'>From the very beginning, our founder believed that Beautya could 
                    not only disrupt beauty retail, but that it would have a positive 
                    impact on the world. Our story began in 2015 when our founder, Jane, 
                    realized that there were very few cosmetic brands that catered to her 
                    skin type. She started experimenting with different ingredients and 
                    formulations in her kitchen, and soon her friends and family were raving 
                    about her products. Encouraged by their feedback, Jane decided to turn her 
                    hobby into a business. Today, our team of experts works hard to create 
                    cosmetics that are not only effective but also sustainable and ethical.</p>
                </div>
                <Image
                    src={ownerPhoto}
                    width={392}
                    height={407}
                    alt='owner'
                    priority={true}
                />
            </div>
            <div className='text-justify mt-12 text-raven'>
                <div className='pb-4'>
                    <h2 className='text-2xl font-bold mb-3'>Ethical and Sustainable Beauty:</h2>
                    <p>At Beautya cosmetic company , we believe that beauty should never 
                        come at the expense of animals, the environment, or our customers' 
                        health. That's why we've made sure that our products are vegan, 
                        curl-free, gluten-free, and packaged in recycled materials
                    </p>
                </div>
                <div className='pb-4'>
                    <h3 className='text-xl font-bold'>Vegan, Curl-Free</h3>
                    <p>When we say our products are vegan, we mean that we never use any 
                        animal-derived ingredients or byproducts in our formulations. 
                        We believe that cruelty-free beauty is the way of the future, and we're 
                        proud to be a part of that movement.
                    </p>
                </div>
                <div className='pb-4'>
                    <h3 className='text-xl font-bold'>Gluten-Free Products</h3>
                    <p>For those with sensitivities or allergies to gluten, we've made sure 
                        that our products are 100% gluten-free. You can use our products with 
                        confidence, knowing that they are safe and gentle on your skin.
                    </p>
                </div>
                <div className='pb-4'>
                    <h3 className='text-xl font-bold'>Recycled Packaging</h3>
                    <p>Finally, we're committed to doing our part for the environment, which 
                        is why we've packaged our products in recycled materials. By choosing our 
                        products, you're making a positive impact on the planet and reducing your 
                        environmental footprint. We're dedicated to providing you with high-quality, 
                        ethically-sourced beauty solutions that you can feel good about using.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBrand;