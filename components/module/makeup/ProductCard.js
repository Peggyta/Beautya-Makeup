import React, {useState} from 'react';

const ProductCard = (props) => {
    const [showPrice, setShowPrice] = useState(false);
    const{title, price, description, slug} = props;
    return (
        <div className='w-72 border mx-auto border-ash text-raven'>
                <img  className='w-full' src={`/images/${slug}.jpg`} alt='product' />
                <h3 className='text-lily font-bold'>{title}</h3>
                <p className='text-sm'>{description}</p>
                <p className= {price>0 ? 'text-lg': 'hidden'}>{price} $</p>
        </div>
    );
};

export default ProductCard;