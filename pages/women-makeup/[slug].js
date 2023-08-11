import React from 'react';
import ProductDetail from '@/components/template/ProductDetail';
import connectDB from '@/utils/connectDB';
import Product from '@/models/Product';

const Detail = ({getSlug}) => {
    return (
        <div>
            <ProductDetail {...getSlug} />
        </div>
    );
};

export default Detail;

export async function getServerSideProps(context) {
    const {
        params:
        {slug}
    } = context;

    try{
        await connectDB();
        const getSlug = await Product.findOne({slug});
        return {
            props: {getSlug: JSON.parse(JSON.stringify(getSlug))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}