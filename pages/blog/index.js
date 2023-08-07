import React from 'react';
import Blog from '@/components/template/Blog';
import BlogModel from '@/models/BlogModel';
import connectDB from '@/utils/connectDB';

const AllBlogs = ({blogs}) => {
    return (
        <div className=" md:px-12 md:mb-4 md:mt-0 mt-6 px-4">
            <Blog data={blogs} /> 
        </div>
    );
};

export default AllBlogs;

export async function getServerSideProps() {
    try {
        await connectDB();
        const blogs = await BlogModel.find();
        return {
            props: {blogs: JSON.parse(JSON.stringify(blogs))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}