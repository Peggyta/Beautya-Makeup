import { Schema, model, models } from "mongoose";

const blogSchema = new Schema ({
    title : String,
    category: String,
    author: String,
    published: String,
    slug: String,
    description: [Object],
    more: [Object],
    usage: String,
    image: String,   
});

const BlogModel = models.BlogModel || model('BlogModel', blogSchema);
export default BlogModel;