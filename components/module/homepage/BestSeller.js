import React, {useState, useEffect} from 'react';
import ProductCard from '../makeup/ProductCard';

const BestSeller = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('/api/products')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[])
    return (
        <div className='md:px-10 px-4'>
            <h3 className='text-center font-bold text-raven text-2xl mt-10 pb-3'>
                Our Best Sellers
            </h3>
            <div className='w-full mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 mt-4'>
                {data.length ? (data.slice(4,8).map((item)=>{
                    return <ProductCard key={item._id} {...item} />                  
                })) : <p className='text-center font-bold text-lg'>loading...</p>} 
            </div>
        </div>
    );
};

export default BestSeller;