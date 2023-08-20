import React, {useState, useEffect} from 'react';
import ProductCard from '../makeup/ProductCard';

const NewIn = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('/api/products')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[])
    return (
        <div className='md:px-10 px-4 bg-jam pt-2 mt-10'>
            <h3 className='text-center font-bold text-white text-2xl mt-10 pb-3'>
                New In
            </h3>
            <div className='w-full mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 pb-16 mt-4'>
                {data.length ? (data.slice(1,5).map((item)=>{
                    return <ProductCard key={item._id} {...item} />                  
                })) : <p className='text-center font-bold text-lg'>loading...</p>} 
            </div>
        </div>
    );
};

export default NewIn;