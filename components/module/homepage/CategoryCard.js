import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import ProductCard from '../makeup/ProductCard';
import Loading from '@/components/template/Loading';

const CategoryCard = (props) => {
    
    const[data, setData] = useState([]);
   
    useEffect(()=> {
        fetch('/api/products')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[]);
    const{category}= props;
    const categoryData = data.filter((item)=> item.category === category);

    return (
        <div className='max-w-8xl mx-auto lg:px-10 px-4 mt-6 md:mt-0'>
            <div className='flex gap-2 font-semibold text-sm pt-6'>
                <Link className='text-cement' href='/'>Home / </Link>
                <p>{category}</p>
            </div>
            <div className='w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 pt-10 pb-16'>
            {!data.length ? (categoryData.map((item)=> {
             return <Loading key={item._id} />
            })) : (categoryData.map((item)=> {
                return <ProductCard key={item._id} {...item} />
             }))}
            </div>
        </div>
    );
};

export default CategoryCard;