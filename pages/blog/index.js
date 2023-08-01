import React from 'react';
import Blog from '@/components/template/Blog';
import BlogModel from '@/models/BlogModel';
import connectDB from '@/utils/connectDB';

const AllBlogs = ({blogs}) => {
    console.log(blogs);
    return (
        <div>
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