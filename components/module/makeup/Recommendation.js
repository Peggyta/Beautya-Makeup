import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
 

const Recommendation = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('/api/products')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[])
    return (
        <div className='px-10 w-max-8xl mx-auto mt-12'>
            <h3 className='text-center font-bold text-xl text-raven'>Recommended Skincare Routine</h3>
            <div className='w-full mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6  gap-10 mt-4 mb-16'>
                {data.length ? (data.slice(4,8).map((item)=>{
                    return <ProductCard key={item._id} {...item} />                  
                })) : <p className='text-center font-bold text-lg'>loading...</p>} 
            </div>
        </div>   
    );
};

export default Recommendation;