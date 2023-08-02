import React from 'react';
import Blog from '@/components/template/Blog';
import BlogModel from '@/models/BlogModel';
import connectDB from '@/utils/connectDB';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AllBlogs = ({blogs}) => {
    const router = useRouter();
    const{route} = router;
    return (
        <div className=" md:px-12 md:mb-4 md:mt-3 mt-10 px-4">
           <Link href={`${route}`} className="font-bold">{route}</Link>
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