import React, {useState} from 'react';
import { useRouter } from 'next/router';
import GreySearch from '@/components/icons/GreySearch';

const SearchBar = () => {
    const[products, setProducts] = useState('');
    const[type, setType] = useState('text');

    const router = useRouter();
    const searchHandler = () => {
        if(products) {
            router.push(`/search/${products}`)
        } else {
            alert('Enter name of a product!')
        }
    }
    
    return (
        <>
        <div className='flex w-full px-10 items-center border-b border-ash'>
            <GreySearch />
            <input 
            value={products}
            type={type} 
            onBlur={() => setType('text')}
            onChange={(e)=> setProducts(e.target.value)}
            className='w-full focus:outline-none py-4 bg-dust text-xl text-cement pl-3'  
            placeholder='What Are You Looking For?'
            />
            <button className='bg-jam transition px-5 rounded-lg hover:bg-cherry py-2 text-white' 
            onClick={searchHandler}>Search</button>
        </div>
        </>
    );
};

export default SearchBar;