import React from 'react';
import MakeUp from '@/components/template/MakeUp';
import connectDB from '@/utils/connectDB';
import Product from '@/models/Product';

const Products = ({products}) => {
    return (
        <div>
            <MakeUp data={products} />
        </div>
    );
};

export default Products;

export async function getServerSideProps() {
    try{
        await connectDB();
        const products = await Product.find();
        return {
            props: {products: JSON.parse(JSON.stringify(products))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}