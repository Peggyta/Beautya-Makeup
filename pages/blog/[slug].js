import React from 'react';
import connectDB from '@/utils/connectDB';
import BlogModel from '@/models/BlogModel';
import BlogDetails from '@/components/template/BlogDetails';

const Details = ({details}) => {
    return (
        <div>
            <BlogDetails {...details} />
        </div>
    );
};

export default Details;

export async function getServerSideProps(context) {
    const {params} = context;
    const {slug} = params;
    
    try {
        await connectDB();
        const details = await BlogModel.findOne({slug});
        return {
            props: {details: JSON.parse(JSON.stringify(details))},
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}
