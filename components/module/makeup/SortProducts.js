import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import FilterIcon from '@/components/icons/FilterIcon';
import FilterProducts from './FilterProducts';
import ProductCard from './ProductCard';

const SortProducts = ({data}) => {
   
    const[open, setIsOpen] = useState(false);
    const[query, setQuery] = useState({price:''})
    const router = useRouter();
    const changeHandler = () => {
        router.push({
            pathname: '/women-makeup/sort',
            query,
        })
    };
    useEffect(()=>{
        const{price} = router.query;
        if(query.price !== price) {
            setQuery({price})
        }
    },[])

    return (
        <>
        <div className='max-w-8xl mx-auto lg:px-12 px-4'>
        <div className='flex justify-between lg:pr-4 flex-row text-raven md:mt-0 mt-6 pt-4 gap-3 items-center'>
            <h3 className='font-bold text-xl lg:block hidden'>Filter</h3>
            <div className='lg:hidden block bg-white border border-ash w-32 
                flex items-center justify-center px-2 gap-1 py-2'>
                <FilterIcon />
                <button onClick={()=> setIsOpen(!open)} className='font-bold w-full text-sm'>Filter</button>
            </div>
            <form onChange={(e)=>{changeHandler(e.target.value)}}>
                <select 
                    name='price'
                    onChange={(e)=>setQuery({...query,[e.target.name]: e.target.value})}
                    value={query.price}
                    className='lg:border-inherit py-2 text-sm font-bold border border-ash 
                    bg-white px-1 cursor-pointer'>
                    <option value='recommend'>Sort: Recommended</option>
                    <option value='higher'>Higher Price</option>
                    <option value='lower'>Lower Price</option>
                </select>
            </form>           
        </div>
            <div className={open ? 'w-full block': 'hidden'}>
                    <FilterProducts/>
            </div>
        </div>
        <div className='w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                md:gap-6 gap-10 mt-4 pb-16'>
            {data?.map((item)=>{
            return <ProductCard key={item._id} {...item} />
            })}
        </div>
    </>
    );
};

export default SortProducts;