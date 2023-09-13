import React, {useState} from 'react';
import { useRouter } from 'next/router';
import GreySearch from '@/components/icons/GreySearch';

const SearchBar = () => {
    const[isOpen, setIsOpen] = useState(false);
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
            onChange={(e) => setProducts(e.target.value)}
            className='w-full focus:outline-none py-4 bg-dust text-xl text-cement pl-3'  
            placeholder='What Are You Looking For?'
            />
            <button className='bg-jam transition px-5 rounded-lg hover:bg-cherry py-2 text-white' 
            onClick={searchHandler}>Search</button>
        </div>
        <div onClick={()=> setIsOpen(!isOpen)} 
          className={!products ? 'backdrop-blur-md brightness-50 min-h-screen absolute z-20 w-full left-0' : null}>
        </div>   
        </>
    );
};

export default SearchBar;