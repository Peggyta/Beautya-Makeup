import { Schema, model, models } from "mongoose";

const productSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    slug: String,
    details: [String],
    usage: [String],
    ingredient: [String],
    more: [String],
    specification: [String],
    features: [String],
    feature: String,
    image: String,
});

const Product = models.Product || model('Product', productSchema);
export default Product;