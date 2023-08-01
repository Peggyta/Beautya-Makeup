import React from 'react';

const BlogCard = (props) => {
    const{title, image, category, author, published, slug, description} = props;
    return (
        <div>
            <div></div>
            <div className='flex'>
                <p>{category}</p>
                <span>|</span>
                <p>{author}</p>
                <span>|</span>
                <p>{published}</p>
            </div>
            <div></div>
        </div>
    );
};

export default BlogCard;