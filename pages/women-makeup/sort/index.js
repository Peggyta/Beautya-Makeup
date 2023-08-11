import React from 'react';
import connectDB from '@/utils/connectDB';
import Product from '@/models/Product';
import SortProducts from '@/components/module/makeup/SortProducts';

const index = ({filteredData}) => {
    return (
        <div>
           <SortProducts data={filteredData} />
        </div>
    );
};

export default index;
export async function getServerSideProps(context) {
    const {query} = context;
    const {price} = query; 
    try {
        await connectDB();
        const products = await Product.find(); 
        const data = JSON.parse(JSON.stringify(products));
        const filteredData = data.filter((item)=> {
            if(price === 'higher') {
                return item.price > 150
            } else if (price === 'lower' && item.price) {
                return item.price <= 150
            } else {
                return item.price
            }
        });
       
        
        return {
            props: {filteredData}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    } 
}   
